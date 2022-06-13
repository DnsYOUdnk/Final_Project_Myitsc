import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../../dataContext/dataContext";
import { MediaELement } from "./GetMediaElement";
import { SearchInput } from "../../SearchInput/SearchInput";
import { PageEmpty } from "../PageEmpty/PageEmpty";
import { Pagination } from "../../Pagination/Pagination";
import { v4 as uuidv4 } from "uuid";
import './pages_media.css';
import Lottie from "lottie-react";
import lottie_loading from '../../../assets/json-animation/lottie-loading.json';
import { useLocation } from "react-router-dom";

export const PageMedia = ({requestName, pageName, url}) => {
    const [mediaData, setMediaData] = useState([]);
    const { searchValue } = useContext(dataContext);
    const [isLoading, setIsLoading] = useState(true);
    let [quantityPages, setQuantityPages] = useState(1);
    const location = useLocation();

    const localStorageMediaData = localStorage.getItem(pageName) ? JSON.parse(localStorage.getItem(pageName)) : [];

    const setReceivedData = (data) => {
        let pageNumber = location.search ? +location.search.split('=')[1] : 1;
        let pageData = data.slice(0,12 + pageNumber)
        setMediaData(pageData);
        setIsLoading(false);
        localStorage.setItem(pageName, JSON.stringify(data));
    }

    const getQuantityElements = () => {
        quantityPages = Math.ceil(localStorageMediaData.length/12);
        setQuantityPages(quantityPages);
    }

    useEffect(() => {
        if(localStorageMediaData.length !== 0) {
            getQuantityElements()
            let pageNumber = location.search ? +location.search.split('=')[1] : 1;
            let pageData = localStorageMediaData.slice(0,12/pageNumber)
            setMediaData(pageData);
            setIsLoading(false);
            return
        }
        if(!url) {
            fetch(`https://imdb-api.com/en/API/${requestName}/k_zciyt5lj`)
                .then(res => res.json())
                .then(json => setReceivedData(json.items))
        } else {
            fetch(url)
                .then(res => res.json())
                .then(json => setReceivedData(json))
        }
    },[location])
    
    const stopLoading = () => {
        setIsLoading(false);
    }

    return (
        <div className="page__media">
            <div className="container">
                <div className="page__media__wrapper">
                    <div className="page__media__hat">
                        <div className="page__media__hat__title">
                            <h1>{pageName}</h1>
                        </div>
                        <div className="page__media__hat__search">
                            < SearchInput />
                        </div>
                    </div>
                    <div className="page__media__catalog">
                        {mediaData.length > 0 ? <ul className="page__media__catalog__items">
                            {mediaData.filter(({ title }) => {
                                if( !searchValue ) return true;
                                return ( title.toLowerCase().includes(searchValue) )
                            }).map(( mediaContent ) => {
                                return < MediaELement mediaContent={ mediaContent } key={ uuidv4() } />
                            })}
                        </ul> : isLoading ? <div className="media__loading" onClick={() => stopLoading()}>
                                    <div className="media__loading__animation">
                                        <Lottie animationData={ lottie_loading } loop={true} autoplay = {true} />
                                    </div> 
                                </div> : < PageEmpty />
                        }
                    </div>
                    {isLoading ? '' :
                        <div className="page__media__pagination">
                            < Pagination location={ location } quantityPages={quantityPages} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}