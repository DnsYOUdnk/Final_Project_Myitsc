import { useRef } from "react";
import { NavLink } from "react-router-dom";
import './nav.css'

export const Nav = () => {
    const ul = useRef();
    const btn = useRef();

    const getNavMenu = () => {
        ul.current.classList.toggle('openMenu');
        btn.current.classList.toggle('open');
    }

    

    return (
        <>
            <nav className="header__nav">
                <ul className="header__nav__items" ref={ul} onClick={() => getNavMenu()}>
                    <li className="header__nav__item active"><NavLink to="/">Home</NavLink></li>
                    <li className="header__nav__item"><NavLink to="/movie">Movie</NavLink></li>
                    <li className="header__nav__item"><NavLink to="serials">Serials</NavLink></li>
                    <li className="header__nav__item"><NavLink to="cartoons">Cartoons</NavLink></li>
                </ul>
            </nav>
            <div ref={btn} className="header__btn-burger" onClick={() => getNavMenu()}>
                <div className="btn__line btn__line1"></div>
                <div className="btn__line btn__line2"></div>
                <div className="btn__line btn__line3"></div>
            </div>
        </>
    )
}