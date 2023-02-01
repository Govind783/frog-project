import React from 'react'
import "../styles/HomePage3.css"
import { BsArrowDown } from 'react-icons/bs'
import asset1 from "../assets/mainAsset.png"
import { useState, useEffect } from 'react'
import sec3img from "../assets/constilatio.png"
import { HashLink } from 'react-router-hash-link'

const HomePage3 = () => {

    const [highlightedLine, setHighlightedLine] = useState(9);

    //highlight active line

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = () => {
        const line1 = document.getElementById("line9");
        const line2 = document.getElementById("line10");
        const line3 = document.getElementById("line11");
        const line4 = document.getElementById("line12");
        const line1Top = line1.getBoundingClientRect().top;
        const line2Top = line2.getBoundingClientRect().top;
        const line3Top = line3.getBoundingClientRect().top;
        const line4Top = line4.getBoundingClientRect().top;

        if (line1Top > 0 && line1Top < window.innerHeight) {
            setHighlightedLine(9);
        } else if (line2Top > 0 && line2Top < window.innerHeight) {
            setHighlightedLine(10);
        } else if (line3Top > 0 && line3Top < window.innerHeight) {
            setHighlightedLine(11);
        } else if (line4Top > 0 && line4Top < window.innerHeight) {
            setHighlightedLine(12);
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
        <div className='homePageMainParent homePageMainParent3'>

            <div className='homeTextMainContainer relative top-20 pl-5 flex flex-nowrap'>

                <div className='HomeLineHold flex-col flex gap-10 flex-wrap'>

                    <HashLink to="#line1" smooth><p id='line9' className={`whiteLine`}></p></HashLink>
                    <HashLink to="#line5" smooth><p id='line10' className={`whiteLine `}></p></HashLink>
                    <HashLink to="#line9" smooth><p id='line11' className={`whiteLine highlighted`}></p></HashLink>
                    <HashLink to='#line13' smooth><p id='line12' className={`whiteLine`}></p></HashLink>

                </div>


                <div className='flex flex-col text-left homeTxtHold' style={{ width: "36rem" }}>
                    <p className=' font-medium abtus text-left'>AUDIENCE </p>
                    <p className='uppercase font-bold frogText'>Exploring the  <br />
                        Galaxy</p>

                    <div className='sec3imgConstillationHold'>
                        <img src={sec3img} className="constilationImg" />
                    </div>


                </div>

            </div>

            <div className='flex justify-end asset1Hold'>
                <p className=' w-6 h-6'></p>
                <img src={asset1} className="asset1" />
            </div>


        </div>)
}

export default HomePage3