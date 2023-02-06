import React from 'react'
import '../styles/HomePage4.css'
import { BsArrowDown } from 'react-icons/bs'
import asset1 from "../assets/mainAsset.png"
import btnAsset1 from "../assets/sec4-1.png"
import btnAsset2 from "../assets/sec4-2.png"
import btnAsset3 from "../assets/sec4-3.png"
import btnAsset4 from "../assets/sec4-4.png"
import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link';
import frgst1 from "../assets/sec4Frog1.png";
import frgst2 from "../assets/sec4Frog2.png";


const HomePage4 = () => {

    const [highlightedLine, setHighlightedLine] = useState(13);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = () => {
        const line1 = document.getElementById("line13");
        const line2 = document.getElementById("line14");
        const line3 = document.getElementById("line15");
        const line4 = document.getElementById("line16");
        const line1Top = line1.getBoundingClientRect().top;
        const line2Top = line2.getBoundingClientRect().top;
        const line3Top = line3.getBoundingClientRect().top;
        const line4Top = line4.getBoundingClientRect().top;

        if (line1Top > 0 && line1Top < window.innerHeight) {
            setHighlightedLine(13);
        } else if (line2Top > 0 && line2Top < window.innerHeight) {
            setHighlightedLine(14);
        } else if (line3Top > 0 && line3Top < window.innerHeight) {
            setHighlightedLine(15);
        } else if (line4Top > 0 && line4Top < window.innerHeight) {
            setHighlightedLine(16);
        }
    };

    const scrollToLine = (line) => {
        const element = document.getElementById(`line${line}`);
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: top,
            behavior: "smooth"
        });
    }

    return (
        <div className='homePageMainParent '>


            <div className='homeTextMainContainer homeTextMainContainer4 relative top-20 pl-5 flex flex-nowrap'>

                <div className='HomeLineHold lineHold4 flex-col flex gap-10 flex-wrap'>

                    <HashLink to="#line1" smooth><p id='line13' className={`whiteLine`}></p></HashLink>
                    <HashLink to="#line5" smooth><p id='line14' className={`whiteLine `}></p></HashLink>
                    <HashLink to="#line9" smooth><p id='line15' className={`whiteLine `}></p></HashLink>
                    <HashLink to='#line13' smooth><p id='line16' className={`whiteLine highlighted`}></p></HashLink>
                </div>


                <div className='flex flex-col text-left homeTxtHold4'>
                    <p className=' font-medium abtus text-left'>LOREM </p>
                    <p className='uppercase font-bold frogText'>Into the <br />
                        Black hole </p>

                    <p className=' font-medium text-left'> To the ones with the courage to jump down a peculiar rabbit hole. <br />
                        One that pulls you away from a world that's created by many and <br />
                        owned by few...
                    </p>
                    <br />
                    <br />

                    <div className='flex flex-wrap pg4CTAConatiner'>


                        <div className='page4Indivitual'>
                            <div className='page4BTNContainer flex justify-around'>
                                <img src={btnAsset1} />
                                <div className='flex flex-col pt-3 btn1Mobile'>
                                    <p className=' z-50 font-semibold text-xl text-black sec4BtnHeading'>BUY </p>
                                    <p className='mobPara1 pg4P'>Buy froggies token now</p>
                                </div>

                            </div>
                        </div>

                        <div className='page4Indivitual'>
                            <div className='page4BTNContainer flex'>
                                <img src={btnAsset2} />
                                <div className='flex flex-col pt-3 pr-3'>
                                    <p className=' z-50 font-semibold text-xl text-black sec4BtnHeading'>INTERSTELLAR </p>
                                    <p className=' pg4P'>Learn More</p>
                                </div>

                            </div>
                        </div>

                        <div className='page4Indivitual'>
                            <div className='page4BTNContainer flex justify-center'>
                                <img src={btnAsset3} className="mt-4" />
                                <div className='flex flex-col pt-3 pl-7'>
                                    <p className=' z-50 font-semibold text-xl text-black sec4BtnHeading'>MANIFESTO </p>
                                    <p className=' pg4P'>Short Cosmic Trip</p>
                                </div>

                            </div>
                        </div>

                        <div className='page4Indivitual'>
                            <div className='page4BTNContainer flex justify-around'>
                                <img src={btnAsset4} />
                                <div className='flex flex-col pt-3'>
                                    <p className=' z-50 font-semibold text-xl text-black sec4BtnHeading'>ASTRONOMICS </p>
                                    <p className=' pg4P'>Outerspace finance</p>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </div>

            <div className='flex justify-end w-full z-50 sec4Logo1Hold '>
                <p className=' w-6 h-6'></p>
                <img src={frgst1} className="frgst1" />
            </div>

            <div className='flex justify-end asset1Hold z-50'>
                <p className=' w-6 h-6'></p>
                <img src={asset1} className="asset1" />
            </div>

            <div className='flex justify-start sec4Logo2Hold'>
            <p className=' h-6'></p>
                <img src={frgst2} className="frgst1 frgst2" />
            </div>

        </div>)
}

export default HomePage4