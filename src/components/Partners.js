import React from 'react'
import "../styles/Partners.css"
import one from "../assets/binan1.png"
import two from "../assets/co2.png"
import three from "../assets/crypto3.png"
import four from "../assets/firee4.png"
import five from "../assets/dtiry5.png"
import six from "../assets/coingeco6.png"
import { useEffect, useState, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import {
    useWindowSize,
} from '@react-hook/window-size'

import PartnersMobile from './PartnersMobile';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useMediaQuery } from 'react-responsive';


const Partners = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false

    };


    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 1000,
        rtl: true,
        arrows: false

    };

    const [width, height] = useWindowSize()

    const responsive = {
        0: { items: 3 },
        568: { items: 3 },
        1000: { items: 4 },
        speed: 500
    };

    //const isTabletOrMobile = useMediaQuery({ maxWidth: 1035 });
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1035 });


    const items = [
        <img src={one} role="presentation" />,
        <img src={one} role="presentation" />,
        <img src={one} role="presentation" />,
        <img src={one} role="presentation" />,
        <img src={one} role="presentation" />,
        <img src={one} role="presentation" />,

    ];


    return (
        <div className='careersMainParent'>

            <div className='careerSec1 carsec2 capitalize'>
                <div className='sec1TextHold sec1TextHold2'>
                    <p className='joinTeam jointeam2 text-left uppercase'>our partners </p>

                </div>
            </div>


            <div className='jobDetailsMainParent text-black text-left font-medium flex flex-wrap'>

                <div className='jobDetailsTextHOLD pl-6 pr-6 flex flex-col'>


                    <div className='jobDetailsSEC1 flex flex-col gap-2 popinsFont'>
                        <p className='text-5xl font-medium mb-3'>Lorem Ipsum dolor</p>
                        <p className='text-5xl font-medium'> amet </p>


                        <br />
                        <p className=' font-medium popinsFont'>Even in the far Galaxies permanent foundations are created through <br />
                            interplanetary connections, think of the stars; Sagittarius, Leo, Taurus. <br />

                        </p>
                        <br />

                        <p className=' font-medium popinsFont'>

                            We at FROGGIES connect in the same way through meaningful partnerships, <br />
                            those that really matter now, and many light-years to come. <br />

                        </p>

                    </div>
                    <br />
                    <br />
                    <br />
                </div>




                {isTabletOrMobile ? <div>
                    <section className="gallery2">
                        <div className="carousel2">
                            <div className="gallery-slides-wrapper">
                                <img src={one} />
                                <img src={two} />
                                <img src={three} />
                                <img src={four} />
                                <img src={five} />
                                <img src={six} />

                            </div>
                            <div className="gallery-slides-wrapper">
                                <img src={six} />
                                <img src={five} />
                                <img src={four} />
                                <img src={three} />
                                <img src={two} />
                                <img src={one} />
                            </div>
                        </div>
                    </section>


                    <section className="gallery2">
                        <div className="carousel2">
                            <div className="gallery-slides-wrapper">
                                <img src={one} />
                                <img src={two} />
                                <img src={three} />
                                <img src={four} />
                                <img src={five} />
                                <img src={six} />

                            </div>
                            <div className="gallery-slides-wrapper">
                                <img src={six} />
                                <img src={five} />
                                <img src={four} />
                                <img src={three} />
                                <img src={two} />
                                <img src={one} />
                            </div>
                        </div>
                    </section>
                    
                </div>
                    :

                    <div className='flex'>

                        <div>
                            <Slider {...settings}>
                                <div className=' p-3'>
                                    <img src={one} />
                                </div>
                                <div className=' p-3'>
                                    <img src={two} />
                                </div>
                                <div className=' p-3'>
                                    <img src={three} />
                                </div>
                                <div className=' p-3'>
                                    <img src={four} />
                                </div>
                                <div className=' p-3'>
                                    <img src={five} />
                                </div>
                                <div className=' p-3'>
                                    <img src={six} />
                                </div>
                            </Slider>
                        </div>

                        <div>
                            <Slider {...settings2}>
                                <div className=' p-3'>
                                    <img src={one} />
                                </div>
                                <div className=' p-3'>
                                    <img src={two} />
                                </div>
                                <div className=' p-3'>
                                    <img src={three} />
                                </div>
                                <div className=' p-3'>
                                    <img src={four} />
                                </div>
                                <div className=' p-3'>
                                    <img src={five} />
                                </div>
                                <div className=' p-3'>
                                    <img src={six} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                }


            </div>


            <br />

        </div>
    )
}

export default Partners



/* 


 <div className='flex flex-wrap cursor-pointer partnerImgHold'>
                    <div>
                        <img src={one} className="figma" />
                    </div>

                    <div>
                        <img src={two} className="ologo" />
                    </div>

                    <div>
                        <img src={three} className="sol" />
                    </div>

                    <div>
                        <img src={four} className="meta" />
                    </div>

                    <div>
                        <img src={five} className="dtory" />
                    </div>

                    <div>
                        <img src={six} className="lens" />
                    </div>

                    <br />
                    <br />
                </div>





*/


/* function showSlides() {
        const slideshow = document.getElementById("slideshow");
        const slides = slideshow.getElementsByClassName("slides");
        let slideIndex = 0;
 
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "flex";
        setTimeout(showSlides, 70000); // Change image every 2 seconds
    }
 
    useEffect(() => {
        showSlides();
 
    }, [])*/



/*

 function showSlides() {
        const slideshow = document.getElementById("slideshow");
        const slides = slideshow.getElementsByClassName("slides");
        let slideIndex = 0;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        slides[slideIndex].style.display = "flex";
        setTimeout(showSlides, 7000);
    }
*/