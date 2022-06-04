import { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export const SectionChoiceMedia1 = () => {
    const [stateCarousel, setStateCarousel] = useState({
                                            goToSlide: 0,
                                            showNavigation: false
                                        });
    
    const navigate = useNavigate()

    const slides = [
        {
          key: uuidv4(),
          hash: '/serials',
          content: <div className="carousel__media__item__serials"><p className='carousel__media__desc'><span>Serials</span></p></div>
        },
        {
          key: uuidv4(),
          hash: '/cartoons',
          content: <div className="carousel__media__item__cartoons"><p className='carousel__media__desc'><span>Cartoons</span></p></div>
        },
        {
          key: uuidv4(),
          hash: '/movie',
          content: <div className="carousel__media__item__movie"><p className='carousel__media__desc'><span>Movie</span></p></div>
        }
    ]
    .map((slide, index) => {
      return { ...slide, onClick: (e) => moveSlider(e,index)};
    });

    const moveSlider = (e, index) => {
        if(stateCarousel.goToSlide === index) navigate(slides[index].hash);
        stateCarousel.goToSlide = index;
        setStateCarousel({...stateCarousel});
    }

    const moveBtnSlider = (e, index) => {
        stateCarousel.goToSlide = index;
        setStateCarousel({...stateCarousel});
    }

    return (
        <section className="choice__media">
            <div className="container">
                <div className="choice__media__wrapper">
                    <div className="choice__media__title">
                        <h2 className="section_title">Choose what to watch</h2>
                        <span className="sub_title">Choose the best and enjoy</span>
                    </div>
                    <div className="choice__media__carousel">
                        <Carousel
                            slides={slides}
                            goToSlide={stateCarousel.goToSlide}
                            offsetRadius={stateCarousel.offsetRadius}
                            showNavigation={stateCarousel.showNavigation}
                        />
                        <div className='choice__media__carousel__nav'>
                            <div className={stateCarousel.goToSlide === 2 ? "choice__media__nav__btn-left nav__btn__carousel active" : "choice__media__nav__btn-left nav__btn__carousel"} onClick={(e) => moveBtnSlider(e, 2)}>
                                <span></span>
                            </div>
                            <div className={stateCarousel.goToSlide === 1 ? "choice__media__nav__btn-left nav__btn__carousel active" : "choice__media__nav__btn-left nav__btn__carousel"} onClick={(e) => moveBtnSlider(e, 1)}>
                                <span></span>
                            </div>
                            <div className={stateCarousel.goToSlide === 0 ? "choice__media__nav__btn-left nav__btn__carousel active" : "choice__media__nav__btn-left nav__btn__carousel"} onClick={(e) => moveBtnSlider(e, 0)}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}