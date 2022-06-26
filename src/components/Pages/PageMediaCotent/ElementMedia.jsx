import ico_btn_like from "../../../assets/image/ico-btn-like.png";
import ico_btn_like_active from "../../../assets/image/ico-btn-like-active.png";
import ico_btn_view from "../../../assets/image/ico-btn-view.png";
import ico_btn_not_view from "../../../assets/image/ico-btn-not-view.png";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../../dataContext/dataContext";
import { ImageElementMedia } from "./ImageElementMedia";
import { MediaPlayer } from "../../MediaPlayer/MediaPlayer";
import { AlertMessage } from "../../AlertMessage/AlertMessage";
import { v4 as uuidv4 } from "uuid";
import './page_media_content.css';
import Lottie from "lottie-react";
import lottie_loading from '../../../assets/json-animation/lottie-loading.json';
import { Image } from 'antd';
import 'antd/dist/antd.dark.css';


export const ElementMedia = ({ contentData }) => {
    let [addView, setAddView ] = useState(false);
    let [addLike, setAddLike ] = useState(false);
    let [addMessageAlert, setAddMessageAlert ] = useState([]);

    let [showVideoPlyer, setshowVideoPlyer ] = useState(false);
    let [addLinkVideo, setAddLinkVideo ] = useState([]);
    const [stopViewTrailer, setStopViewTrailer ] = useState(false);

    
    const [isLoading, setIsLoading] = useState(false)

    let { id, image, title, original_title, fullTitle, release_date, releaseDate, running_time, runtimeMins, description, plot, director, directors, producer, stars, companies, genres} = contentData;
    
    title = fullTitle || title;
    description = description || plot;
    release_date = release_date || releaseDate;
    director = director || directors;
    running_time = running_time || runtimeMins;
    const { markedElements, setMarkedElements, changeLikedData } = useContext(dataContext);

    const getContentTrailer = async (id) => {
        setIsLoading(true);
        setStopViewTrailer(false);
        if(/tt[0-9]*/g.test(id)) {
            const response = await fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_674v0y48/${id}`);
            const answer = await response.json();
            setAddLinkVideo(answer);
        } else {
            const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_zciyt5lj/${title}`);
            const answer = await response.json();
            const newId = await answer.results[0].id;
            const responseNew = await fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_rwppms7u/${newId}`);
            const answerNew = await responseNew.json();
            setAddLinkVideo(answerNew);
        }
        setIsLoading(false);
        setshowVideoPlyer(!showVideoPlyer);
    }

    const stopGetTrailer = () => {
        setIsLoading(false);
        setStopViewTrailer(true);
    }

    useEffect(() => {
        markedElements.forEach((elem) => {
            if(elem.id === id) {
                setAddView(elem.viewed)
                setAddLike(elem.liked)
            }
        });
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            addMessageAlert.shift()
            setAddMessageAlert([...addMessageAlert])
        }, 500)

        return () => clearTimeout(timeout);

    }, [addMessageAlert])

    const viewMessageAlert = (btn) => {
        const viewBtn = btn === 'like' ? addLike : addView;
        addMessageAlert.push({view: viewBtn, tag: btn});

        if(addMessageAlert.length > 2) addMessageAlert.shift();

        setAddMessageAlert([...addMessageAlert]);
    }

    return (
        <div className="page__media__content__wrapper">
            <h2>{title}{original_title ? ' - ' + original_title : ''}</h2>
            <div className="page__media__content__inform">
                <div className="page__media__content__pic">
                    <Image src={image} title={title} />
                </div>
                <div className="page__media__content__inform__table">
                    <ul className="page__media__content__inform__items">

                        {director ? <li className="page__media__content__inform__item"><span>Director:</span> {director}</li> : ""}
                        
                        {producer ? <li className="page__media__content__inform__item"><span>Producer:</span> {producer}</li> : <li className="page__media__content__inform__item"><span>Companies:</span> {companies}</li>}
                        
                        <li className="page__media__content__inform__item"><span>Release date:</span> {release_date}</li>

                        <li className="page__media__content__inform__item"><span>Duration:</span> {running_time || '~'} min</li>

                        <li className="page__media__content__inform__item"><span>Genre:</span> {genres || 'Anime'}</li>

                        {stars ? <li className="page__media__content__inform__item"><span>Actors:</span> {stars}</li> : '' }

                        <li className="page__media__content__inform__item"><span>Description:</span> {description}</li>

                    </ul>
                    <div className="page__media__content__buttons">
                        <div className="page__media__content__btn">

                            <button className="page__media__content__view" 
                                    title={addView ? "Watched" : "Not watched"} 
                                    onClick={() => {
                                        changeLikedData('btn-view', setAddView, addView, setAddLike, addLike, contentData, markedElements, setMarkedElements);
                                        viewMessageAlert("view");
                                        }}>
                                    <img src={addView ? ico_btn_view : ico_btn_not_view} alt="view" />
                            </button>
                            <button className="page__media__content__like" 
                                    title={addLike ? "Liked it" : "Not like it"} 
                                    onClick={() => {
                                        changeLikedData('btn-like', setAddView, addView, setAddLike, addLike, contentData, markedElements, setMarkedElements);
                                        viewMessageAlert("like");
                                        }}>
                                    <img src={addLike ? ico_btn_like_active : ico_btn_like} alt="like" />
                            </button>
                        </div>
                        <div className="page__media__content__video__btn">
                            <button onClick={() => getContentTrailer(id)}>Trailer &#9660;</button>
                        </div> 
                    </div>
                </div>
            </div>
            {showVideoPlyer && !stopViewTrailer ? < MediaPlayer 
                                    addLinkVideo={ addLinkVideo } 
                                    setshowVideoPlyer = {setshowVideoPlyer} 
                                    showVideoPlyer = {showVideoPlyer}
                                /> : isLoading ? 
                                <div className="media__loading loading__palyer" onClick={() => stopGetTrailer()}>
                                    <div className="media__loading__animation">
                                        <Lottie animationData={ lottie_loading } loop={true} autoplay = {true} />
                                    </div>
                                </div> 
                                : ''}
            {addMessageAlert.length > 0 ? 
                                <ul className="alert_messages">
                                        {addMessageAlert.map(( messageData ) => {
                                            return < AlertMessage messageData={ messageData } title={title} key={ uuidv4() }/>
                                        })}
                                </ul> 
                                : ''
            }
        </div>
    )
}