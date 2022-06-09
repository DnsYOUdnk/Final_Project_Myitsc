import { useNavigate } from "react-router-dom";

export const MediaELement = ({ mediaContent }) => {
    const { id, fullTitle, image, crew, title, release_date, director, producer } = mediaContent;
    const newfullTitle = fullTitle ? fullTitle : `${title + ' (' + release_date + ')'}`;
    const newCrew = crew ? crew : `${director + ', ' + producer}`;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`./media/${id}/${title}`)
    }
    
    return (
        <li className="page__media__catalog__item" onClick={() => handleClick()}>
            <div className="page__media__item__img">
                <div className="page__media__item__background"></div>
                <img src={image} alt={title} />
            </div>
            <div className="page__media__item__description">
                <h3 className="page__media__item__title">{newfullTitle}</h3>
                <div className="page__media__item__creators">
                    <p>{newCrew}</p>
                </div>
            </div>
        </li>
    )
}