import { useNavigate } from "react-router-dom"
import { getMovies } from "../../../movieData/dataMovie";

export const SectionPromo = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        const dataMovie = getMovies();
        navigate(`./random/media/${dataMovie.id}/${dataMovie.title}`)
    }

    return (
        <section className="promo">
            <div className="container">
                <div className="promo__wrapper">
                    <div className="promo__title" title="Click Me!" onClick={() => handleClick()}>
                        <h1>Don't know what to watch or how to kill time? We will help!</h1>
                        <p className="promo__sub__title">We have something big for you!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}