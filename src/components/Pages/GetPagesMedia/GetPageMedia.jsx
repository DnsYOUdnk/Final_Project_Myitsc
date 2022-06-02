import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../../dataContext/dataContext";
import { MediaELement } from "./GetMediaElement";
import { SearchInput } from "../../SearchInput/SearchInput";
import { v4 as uuidv4 } from "uuid";
import './pages_media.css';
import Lottie from "lottie-react";
import lottie_loading from '../../../assets/json-animation/lottie-loading.json';
import { PageEmpty } from "../PageEmpty/PageEmpty";

export const PageMedia = ({requestName, pageName, requestKey, url}) => {
    const [mediaData, setMediaData] = useState([]);
    const { searchValue } = useContext(dataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(!url) {
            fetch(`https://imdb-api.com/en/API/${requestName}/k_zciyt5lj`)
                .then(res => res.json())
                .then(json => { setMediaData(json.items)
                                setIsLoading(false);
                             })
        } else {
            fetch(url)
                .then(res => res.json())
                .then(json => {
                    setMediaData(json.slice(0, 21));
                    setIsLoading(false);
                })
        }
    },[])
    
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
                            {mediaData.filter(({title}) => {
                                if(!searchValue) return true;
                                return (title.toLowerCase().includes(searchValue))
                            }).map((mediaContent) => {
                                return < MediaELement mediaContent={mediaContent} key={uuidv4()} />
                            })}
                        </ul> : isLoading ? <div className="media__loading" onClick={() => stopLoading()}>
                                    <div className="media__loading__animation">
                                        <Lottie animationData={ lottie_loading } loop={true} autoplay = {true} />
                                    </div> 
                                </div> : < PageEmpty />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}