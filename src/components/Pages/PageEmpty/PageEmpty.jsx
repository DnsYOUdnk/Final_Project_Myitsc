import './page_empty.css';
import Lottie from "lottie-react";
import lottie_empty from '../../../assets/json-animation/lottie-empty.json';

export const PageEmpty = () => {
    return (
        <div className="page__media__like-list__empty">
            <h2>The page is empty</h2>
            <div className="page__movie__loading">
                <Lottie animationData={lottie_empty} loop={true} autoplay = {true}/>
            </div>
        </div>
    )
}