import classnames from 'classnames';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../../../dataContext/dataContext';

export const LikedMediaElement = ({ mediaContent }) => {
    
    const { markedElements, setMarkedElements, changeLikedData} = useContext(dataContext);
    let { id, image, title, description, plot, director, directors, liked, viewed } = mediaContent;

    description = description || plot;
    director = director || directors;

    let [addView, setAddView ] = useState(viewed);
    let [addLike, setAddLike ] = useState(liked);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`./media/${id}/${title}`)
    }

    return (
        <li className={classnames("page__media__like-list__item", {"active" : viewed})}>
            <div className="page__media__like-list__pic">
                    <img src={image} alt={title} />
            </div>
            <div className="page__media__like-list__inform">
                <h3 className="page__media__like-list__title" onClick={() => handleClick()}>{title}</h3>
                {director ? <div className="page__media__like-list__author"><span>Director:</span> {director}</div> : ""}
                <div className="page__media__like-list__description"><span>Description:</span> {description.slice(0, 300) + '...'}</div>
            </div>
            <div className="page__media__like-list__btn">
                <button className={classnames("page__media__like-list__view like-list__btn", {"active" : viewed})} onClick={() => changeLikedData('btn-view', setAddView, addView, setAddLike, addLike, mediaContent, markedElements, setMarkedElements)}>{viewed ? 'Watched' : 'Not watched'}</button>
                <button className="page__media__like-list__like like-list__btn" onClick={() => changeLikedData('btn-like', setAddView, addView, setAddLike, addLike, mediaContent, markedElements, setMarkedElements)}>Remove from liked</button>
            </div>
        </li>
    )
}