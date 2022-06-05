import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageEmpty } from "../PageEmpty/PageEmpty";
import { ElementMedia } from "./ElementMedia";
import Lottie from "lottie-react";
import lottie_loading from '../../../assets/json-animation/lottie-loading.json';

export const PageMediaContent = () => {
    const [contentData, setContentData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        if(/tt[0-9]*/g.test(id)) {
            fetch(`https://imdb-api.com/en/API/Title/k_674v0y48/${id}`)
                .then(res => res.json())
                .then(json => {
                    setContentData(json);
                    setIsLoading(false);
                })
                
        } else {
            fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
                .then(res => res.json())
                .then(json => {
                    setContentData(json);
                    setIsLoading(false)
                })
        }
    })

    const stopLoading = () => {
        setIsLoading(!isLoading);
    }

    return (
        <div className="page__media__content">
            <div className="container">
                { contentData.image ? < ElementMedia contentData={contentData} /> :  isLoading ? 
                                <div className="media__loading" onClick={() => stopLoading()}>
                                    <div className="media__loading__animation">
                                        <Lottie animationData={ lottie_loading } loop={true} autoplay = {true} />
                                    </div> 
                                </div> : <PageEmpty />
                            }
            </div>
        </div>
    )
}