import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import ico_folder_like from "./../../assets/image/ico-folder-like.png";
import { Nav } from "../Navigation/Nav";
import './header.css';


export const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <Link to="/">< Logo /></Link>
                    </div>
                    < Nav />

                    <div className="header__marked">
                        <div className="header__marked__like">
                            <Link to="/list-of-liked"><img src={ico_folder_like} alt="folder-like"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}