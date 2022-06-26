import { PageEmpty } from "../PageEmpty/PageEmpty";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../../dataContext/dataContext";
import { LikedMediaElement } from "./LikedMediaElement";
import { v4 as uuidv4 } from "uuid";
import { AlertMessage } from "../../AlertMessage/AlertMessage";
import './page_like_list.css'

export const PageLikeList = () => {
    const { markedElements} = useContext(dataContext);

    let [addMessageAlert, setAddMessageAlert ] = useState([]);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            addMessageAlert.shift()
            setAddMessageAlert([...addMessageAlert])
        }, 1500)

        return () => clearTimeout(timeout);

    }, [addMessageAlert])

    const viewMessageAlert = (btn, title, addLike, addView) => {
        const viewBtn = btn === 'like' ? addLike : addView;
        addMessageAlert.push({view: viewBtn, tag: btn, title});

        if(addMessageAlert.length > 2) addMessageAlert.shift();

        setAddMessageAlert([...addMessageAlert]);
    }

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
                                        return < LikedMediaElement mediaContent={ mediaContent } viewMessageAlert={viewMessageAlert} key={ uuidv4() } />;
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
            {addMessageAlert.length > 0 ? 
                                <ul className="alert_messages">
                                        {addMessageAlert.map(( messageData ) => {
                                            return < AlertMessage messageData={ messageData } title={messageData.title} key={ uuidv4() }/>
                                        })}
                                </ul> 
                                : ''
            }
        </div>
    )
}