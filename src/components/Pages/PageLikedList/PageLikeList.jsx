import { PageEmpty } from "../PageEmpty/PageEmpty";
import { useContext } from "react";
import { dataContext } from "../../../dataContext/dataContext";
import { LikedMediaElement } from "./LikedMediaElement";
import { v4 as uuidv4 } from "uuid";
import './page_like_list.css'

export const PageLikeList = () => {
    const { markedElements} = useContext(dataContext);

    return (
        <div className="page__media">
            <div className="container">
                <div className="page__media__wrapper">
                    <div className="page__media__hat">
                        <div className="page__media__hat__title">
                            <h1>List of liked</h1>
                        </div>
                    </div>
                    <div className="page__media__like-list">
                        { markedElements.filter(({liked}) => liked).length > 0 ? 
                            <ul className="page__media__like-list__items">
                                {markedElements.map((mediaContent) => {
                                    if(mediaContent.liked) {
                                        return < LikedMediaElement mediaContent={ mediaContent } key={ uuidv4() } />;
                                    } else {
                                        return '';
                                    }
                                })}
                            </ul> : 
                                < PageEmpty />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}