import React from "react";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Facebook } from "../../assets/svg/footer__social__facebook.svg";
import { ReactComponent as Instagram } from "../../assets/svg/footer__social__instagram.svg";
import { ReactComponent as Twitter } from "../../assets/svg/footer__social__twitter.svg";
import { Link } from 'react-router-dom';
import './footer.css'

export const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__nav">
                        <div className="footer__social">
                            <div className="footer__social__logo">
                                <Link to="/">< Logo /></Link>
                            </div>
                            <p className="footer__social__description">Any feedback or questions? Contact us on our social media</p>
                            <ul className="footer__social__items">
                                <li className="footer__social__item"><a href="https://facebook.com/"><Facebook/></a></li>
                                <li className="footer__social__item"><a href="https://twitter.com/"><Twitter/></a></li>
                                <li className="footer__social__item"><a href="https://instagram.com/"><Instagram/></a></li>
                            </ul>
                        </div>
                        <div className="footer__menu">
                            <h3>Menu</h3>
                            <ul className="footer__menu__items">
                                    <li className="footer__menu__item"><Link to="/">Home</Link></li>
                                    <li className="footer__menu__item"><Link to="/movie">Movie</Link></li>
                                    <li className="footer__menu__item"><Link to="serials">Serials</Link></li>
                                    <li className="footer__menu__item"><Link to="cartoons">Cartoons</Link></li>
                            </ul>
                        </div>
                        <div className="footer__further-info">
                            <h3>Further Information</h3>
                            <ul className="footer__further-info__items">
                                    <li className="footer__further-info__item"><Link to="/Terms&Conditions">Terms & Conditions</Link></li>
                                    <li className="footer__further-info__item"><Link to="/Privacy Policy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2022 Sinauw. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}