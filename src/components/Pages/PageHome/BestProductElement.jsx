import { Link } from "react-router-dom";

export const BestProductElement = ({ mediaContent }) => {
    const { id, title, gif } = mediaContent;
    let urlMovie = `/home/media/${id}/${title}`;

    return (
        <li className="best__products__item">
            <div className="best__products__img">
                <div className="img__background"></div>
                <img src={gif ? gif : "https://i.gifer.com/IVvP.gif"} alt="img" />
            </div>
            <div className="best__products__item__title">
                <h3>{title}</h3>
            </div>
            <div className="best__products__description">
                <p>Click select and find out if you are interested in this movie...</p>
            </div>
            <div className="best__products__item__btn">
                <Link to={urlMovie} className="item__link__btn">Select</Link>
            </div>
        </li>
    )
}