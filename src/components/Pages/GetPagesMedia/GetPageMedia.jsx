import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { dataContext } from "../../../dataContext/dataContext";
import { MediaELement } from "./GetMediaElement";
import { SearchInput } from "../../SearchInput/SearchInput";
import { PageEmpty } from "../PageEmpty/PageEmpty";
import { Pagination } from "../../Pagination/Pagination";
import { v4 as uuidv4 } from "uuid";
import './pages_media.css';
import Lottie from "lottie-react";
import lottie_loading from '../../../assets/json-animation/lottie-loading.json';

export const PageMedia = ({ requestName, pageName, url }) => {
    const { getReceivedMediaData } = useContext(dataContext);
    const [ mediaData, setMediaData ] = useState({data: [], currentPage: 0, totalPages: 0});
    const [ isLoading, setIsLoading ] = useState(true);

    const location = useLocation();

    const localStorageMediaData = localStorage.getItem(pageName) ? JSON.parse(localStorage.getItem(pageName)) : [];

    let indexPage = 12;
        if(window.screen.availWidth <= 768) {
            indexPage = 6;
        }

    const setReceivedData = (data) => {
        if(!Array.isArray(data)) return
        if(!localStorage.getItem(pageName)) localStorage.setItem(pageName, JSON.stringify(data));
        getReceivedMediaData(data, location.search, setMediaData, indexPage);
        setIsLoading(false);
    }

    useEffect(() => {
        if(localStorageMediaData.length !== 0) {
            setReceivedData(localStorageMediaData);
        } else if(!url) {
            fetch(`https://imdb-api.com/en/API/${requestName}/k_zciyt5lj`)
                .then(res => res.json())
                .then(json => setReceivedData(json.items))
        } else {
            fetch(url)
                .then(res => res.json())
                .then(json => setReceivedData(json))
        }
    }, [location])
    
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
                            < SearchInput 
                                setMediaData={setMediaData} 
                                localStorageMediaData={localStorageMediaData} 
                                setReceivedData={setReceivedData}
                            />
                        </div>
                    </div>
                    <div className="page__media__catalog">
                        {mediaData.data.length > 0 ? <ul className="page__media__catalog__items">
                            {mediaData.data.map(( mediaContent ) => {
                                return < MediaELement mediaContent={ mediaContent } key={ uuidv4() } />
                            })}
                        </ul> : isLoading ? <div className="media__loading" onClick={() => stopLoading()}>
                                    <div className="media__loading__animation">
                                        <Lottie animationData={ lottie_loading } loop={true} autoplay = {true} />
                                    </div> 
                                </div> : < PageEmpty />
                        }
                    </div>
                    {isLoading || mediaData.totalPages === 0 ? '' :
                        <div className="page__media__pagination">
                            < Pagination currentPage = {mediaData.currentPage} totalPages={mediaData.totalPages} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}