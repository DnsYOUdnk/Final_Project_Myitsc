import { useEffect, useState } from "react";
import { getMovies } from "../../../jsonData/dataMovie";
import { BestProductElement } from "./BestProductElement";
import { v4 as uuidv4 } from "uuid";

export const SectionBestProducts = () => {
    const [bestMovies, setBestMovies] = useState([]);

    useEffect(() => {
        setBestMovies(getMovies(4))
    }, [])

    return (
        <section className="best__products">
            <div className="container">
                <div className="best__products__wrapper">
                    <div className="best__products__title">
                        <h2 className="section_title">The best on our platform</h2>
                        <span className="sub_title">Choose the best and enjoy</span>
                    </div>
                    <ul className="best__products__items">
                        {bestMovies.map((mediaContent) => {
                            return < BestProductElement mediaContent={mediaContent} key={uuidv4()} />
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}