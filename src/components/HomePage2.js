import React from 'react'
import "../styles/HomePage.css"
import { BsArrowDown } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import card1 from "../assets/cardd1.png"
import card2 from "../assets/cardd2.png"
import card3 from "../assets/cardd3.png"
import card4 from "../assets/cardd4.png"
import card5 from "../assets/cardd5.png"
import { useState, useEffect } from 'react'
import asset1 from "../assets/mainAsset.png"
import { HashLink } from 'react-router-hash-link'


const HomePage2 = () => {

    const [highlightedLine, setHighlightedLine] = useState(5);


    //HIGHLIGHT ACTIVE LINE

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = () => {
        const line1 = document.getElementById("line5");
        const line2 = document.getElementById("line6");
        const line3 = document.getElementById("line7");
        const line4 = document.getElementById("line8");
        const line1Top = line1.getBoundingClientRect().top;
        const line2Top = line2.getBoundingClientRect().top;
        const line3Top = line3.getBoundingClientRect().top;
        const line4Top = line4.getBoundingClientRect().top;

        if (line1Top > 0 && line1Top < window.innerHeight) {
            setHighlightedLine(5);
        } else if (line2Top > 0 && line2Top < window.innerHeight) {
            setHighlightedLine(6);
        } else if (line3Top > 0 && line3Top < window.innerHeight) {
            setHighlightedLine(7);
        } else if (line4Top > 0 && line4Top < window.innerHeight) {
            setHighlightedLine(8);
        }
    };

    // SCROLL TO THE RESPECITVE LINE
    const scrollToLine = (line) => {
        const element = document.getElementById(`line${line}`);
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: top,
            behavior: "smooth"
        });
    }


    return (
        <div className='homePageMainParent homePageMainParent2'>


            <div className='homeTextMainContainer homeTextMainContainer2 relative top-20 pl-5 flex flex-nowrap'>

                <div className='HomeLineHold HomeLineHold2 flex-col flex gap-10 flex-wrap'>

                    <HashLink to="#line1" smooth><p id='line5' className={`whiteLine`}></p></HashLink>
                    <HashLink to="#line5" smooth><p id='line6' className={`whiteLine highlighted`}></p></HashLink>
                    <HashLink to="#line9" smooth><p id='line7' className={`whiteLine`}></p></HashLink>
                    <HashLink to='#line13' smooth><p id='line8' className={`whiteLine`}></p></HashLink>
                </div>


                <div className=' text-left homeTxtHold2'>
                    <p className=' font-medium abtus text-left'>TEAM </p>
                    <p className='uppercase font-bold frogText text-left'>The Cosmic Crew</p>
                    <p className=' pr-11'>Introducing the engine behind the operation. Hailing from Copenhagen, Holland <br />
                        and Berlin, our diverse team is united by our fascination with the space <br />
                        exploration and READY to blast into the next GEN of the space.</p>

                    <button className='flex moonBtn font-semibold mt-7'> Moon <span className='pt-1'><BsArrowDown className='font-bold' /> </span></button>



                    <br />
                    <br />


                    <div className='homePage2CardsHold flex flex-wrap'>

                        <div className='homePage2IndivitualCard'>
                            <img src={card1} className=" w-24 mb-5" />
                            <p className='font-bold text-xl'>CRAZYX</p>
                            <p className=' text-gray-500 cardSubHeading'>Core Member</p>

                            <div className="twitter-icon-container text-center mr-5 hidden text-white fill-white">
                                <span className='flex'><FaTwitter className='text-lg' /> @CRAZYX </span>
                            </div>
                        </div>

                        <div className='homePage2IndivitualCard'>
                            <img src={card2} className="card2Img w-36  mb-3" />
                            <p className='font-bold text-xl '>CHOPIN</p>
                            <p className=' text-gray-500 cardSubHeading '>Core Member</p>

                            <div className="twitter-icon-container text-center mr-5 hidden text-white fill-white">
                                <span className='flex'><FaTwitter className='text-lg' /> @CRAZYX </span>
                            </div>
                        </div>

                        <div className='homePage2IndivitualCard'>
                            <img src={card3} className="card3Img relative top-10 ml-3" />
                            <p className='font-bold text-xl card3Text'>MASTER...</p>
                            <p className=' text-gray-500 card3Text cardSubHeading'>Co-Founder</p>

                            <div className="twitter-icon-container text-center mr-5 hidden text-white fill-white">
                                <span className='flex'><FaTwitter className='text-lg' /> @CRAZYX </span>
                            </div>
                        </div>

                        <div className='homePage2IndivitualCard'>
                            <div className=' overflow-hidden'>
                                <img src={card4} className="ml-5 cardimg4" />
                            </div>
                            <p className='font-bold text-xl card4Text'>MARCO</p>
                            <p className=' text-gray-500 cardSubHeading card4Text'>Designer</p>

                            <div className="twitter-icon-container text-center mr-5 hidden text-white fill-white">
                                <span className='flex'><FaTwitter className='text-lg' /> @CRAZYX </span>
                            </div>
                        </div>

                        <div className='homePage2IndivitualCard'>
                            <img src={card5} className="ml-6 w-28 mb-1 mt-3 " />
                            <p className='font-bold text-xl'>JOCHEN</p>
                            <p className=' text-gray-500 cardSubHeading'>Developer</p>

                            <div className="twitter-icon-container text-center mr-5 hidden text-white fill-white">
                                <span className='flex'><FaTwitter className='text-lg' /> @CRAZYX </span>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

            <div className='flex justify-end asset1Hold'>
                <p className=' w-6 h-6'></p>
                <img src={asset1} className="asset1" />
            </div>



        </div>)
}

export default HomePage2