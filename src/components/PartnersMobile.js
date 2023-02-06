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

const PartnersMobile = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000

    };


    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        rtl: true,

    };

    return (
        <div>
                <div className='flex'>

                    <div>
                        <Slider {...settings}>
                            <div className=' p-3 blendd'>
                                <img src={one} className="blendd" />
                            </div>
                            <div className=' p-3 blendd'>
                                <img src={two} className="blendd" />
                            </div>
                            <div className=' p-3 blendd'>
                                <img src={three} className="blendd" />
                            </div>
                            <div className=' p-3 blendd'>
                                <img src={four} className="blendd" />
                            </div>
                            <div className=' p-3 blendd'>
                                <img src={five} className="blendd" />
                            </div>
                            <div className=' p-3 blendd'>
                                <img src={six} className="blendd" />
                            </div>
                        </Slider>
                    </div>

                    <div>
                        <Slider {...settings2}>
                            <div className=' p-3 blendd'>
                                <img src={one} className="blendd" />
                            </div>
                            <div className=' p-3'>
                                <img src={two} className="blendd" />
                            </div>
                            <div className=' p-3'>
                                <img src={three} className="blendd" />
                            </div>
                            <div className=' p-3'>
                                <img src={four} className="blendd" />
                            </div>
                            <div className=' p-3'>
                                <img src={five} className="blendd" />
                            </div>
                            <div className=' p-3'>
                                <img src={six} className="blendd" />
                            </div>
                        </Slider>
                    </div>
                </div>
        </div>
    )
}

export default PartnersMobile