import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import ico_folder_like from "./../../assets/image/ico-folder-like.png";
import { Nav } from "../Navigation/Nav";
import './header.css';


export const Header = () => {
    let navMenu = null;
    let btnMenu = null;
    let app = null;

    const getNavMenu = (ul, btn) => {
        app = document.querySelector('.App');
        navMenu = ul;
        btnMenu = btn;
        if(btnMenu.classList.contains('open')) {
            startCloseMenu();
        } else {
            navMenu.classList.add('openMenu');
            app.classList.add('active_menu');
            btnMenu.classList.add('open');
        }
    }

    const startCloseMenu = (element) => {
        if(!navMenu) return
        if(navMenu.classList.contains('openMenu') && (navMenu !== element)) {
            navMenu.classList.remove('openMenu');
            navMenu.classList.add('closeMenu');
            app.classList.remove('active_menu');
            btnMenu.classList.remove('open');
        } 
    }


    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo" onClick={() => startCloseMenu()}>
                        <Link to="/">< Logo /></Link>
                    </div>
                    < Nav getNavMenu={getNavMenu} startCloseMenu={startCloseMenu}/>
                    <div className="header__marked">
                        <div className="header__marked__like" onClick={() => startCloseMenu()}>
                            <NavLink to="/list-of-liked"><img src={ico_folder_like} alt="folder-like"/></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}