import { useRef } from "react";
import { NavLink } from "react-router-dom";
import './nav.css'

export const Nav = ({ getNavMenu, startCloseMenu }) => {
    const ul = useRef();
    const btn = useRef();

    const clearNavMenu = () => {
        ul.current.classList.remove('closeMenu');
    }

    return (
        <>
            <nav className="header__nav">
                <ul className="header__nav__items" ref={ul} onClick={(e) => startCloseMenu(e.target)} onAnimationEnd = {() => clearNavMenu()}>
                    <li className="header__nav__item active"><NavLink to="/">Home</NavLink></li>
                    <li className="header__nav__item"><NavLink to="/movie">Movie</NavLink></li>
                    <li className="header__nav__item"><NavLink to="/serials">Serials</NavLink></li>
                    <li className="header__nav__item"><NavLink to="/cartoons">Cartoons</NavLink></li>
                </ul>
            </nav>
            <div ref={btn} className="header__btn-burger" onClick={() => getNavMenu(ul.current, btn.current)}>
                <div className="btn__line btn__line1"></div>
                <div className="btn__line btn__line2"></div>
                <div className="btn__line btn__line3"></div>
            </div>
        </>
    )
}