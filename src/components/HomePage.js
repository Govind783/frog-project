import React from 'react'
import "../styles/HomePage.css"
import { BsArrowDown } from 'react-icons/bs'
import asset1 from "../assets/mainAsset.png"
import { useState } from 'react'
import { useEffect } from 'react'
import priceConatiner from "../assets/homePriceBox2.png"
import { BiChevronUp } from "react-icons/bi"
import { HashLink } from 'react-router-hash-link';
import incrementArrow from "../assets/boxArrUp.png"

// getBoundingClientRect
const HomePage = () => {

    const [highlightedLine, setHighlightedLine] = useState(1);


    // HIGHLIGHT ACTIVE LINE

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = () => {
        const line1 = document.getElementById("line1");
        const line2 = document.getElementById("line2");
        const line3 = document.getElementById("line3");
        const line4 = document.getElementById("line4");
        const line1Top = line1.getBoundingClientRect().top;
        const line2Top = line2.getBoundingClientRect().top;
        const line3Top = line3.getBoundingClientRect().top;
        const line4Top = line4.getBoundingClientRect().top;

        if (line1Top > 0 && line1Top < window.innerHeight) {
            setHighlightedLine(1);
        } else if (line2Top > 0 && line2Top < window.innerHeight) {
            setHighlightedLine(2);
        } else if (line3Top > 0 && line3Top < window.innerHeight) {
            setHighlightedLine(3);
        } else if (line4Top > 0 && line4Top < window.innerHeight) {
            setHighlightedLine(4);
        }
    };


    // TO SCROLL TO THAT LINE

    const scrollToLine = (line) => {
        const element = document.getElementById(`line${line}`);
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: top,
            behavior: "smooth"
        });
    }


    return (
        <div className='homePageMainParent'>

            <div className='homeTextMainContainer relative top-20 pl-5 flex flex-nowrap '>


                <div className='HomeLineHold flex-col flex gap-10 flex-wrap'>

                    <p id='line1' className={`whiteLine highlighted`}></p>
                    <HashLink to="#line5" smooth><p id='line2' className={`whiteLine`}></p></HashLink>
                    <HashLink to="#line9" smooth><p id='line3' className={`whiteLine`}></p></HashLink>
                    <HashLink to='#line13' smooth><p id='line4' className={`whiteLine`}></p></HashLink>

                </div>


                <div className='flex flex-col text-left homeTxtHold'>
                    <p className=' font-medium abtus text-left'>ABOUT US </p>
                    <p className='uppercase font-bold frogText'>Froggies to
                        <br />
                        the space
                    </p>

                    <p className=' font-medium text-left'> We are Froggies, a memecoin launched in November 2021. Flew passed bulls and <br />
                        bears, hype and fud.
                        <br />
                    </p>
                    <br />
                    <br />


                    <p>
                        We are still here, and ready to provide the market with a Second Gen Memecoin. <br />
                        Our ultimate destination is Moon, and to assure our landing zone in Space we <br />
                        build on community, utility and usability. Froggies is an open community and <br />
                        drive a free market. Our team is devoted to delivering the best to our holders, and  <br />
                        securing a long-term project.  </p>

                    <div className='ctaBtnHold flex flex-wrap pt-10'>
                        <p className='journey'>Join us while we build on common goals . </p>
                        <p className=' ml-4 dotLine'>.<span className='homeLine'>____________</span></p>
                        <button className='flex moonBtn font-semibold mb-10'> Moon <span className='pt-1'><BsArrowDown className='font-bold' /> </span></button>
                    </div>


                    <div className='thumbnail'>
                        <img src={priceConatiner} className="priceBoxImg" />
                        <div className='caption pb-9'>
                            <div className='boxTxtMainParent '>

                                <div className='boxTxtPrice1 borderBottomPriceBox mb-1'>
                                    <p className=' text-gray-400 font-medium text-left'>$FRGST PRICE</p>
                                    <p className='font-semibold flex justify-between gap-3'>$0.000000000000002477 <span className=' mb-2 inline-block boxStatsIncrement text-white bg-green-500 rounded-md w-16 h-7 pl-1'> <img src={incrementArrow} className=' inline-block relative greenChevron' /> <p className=' inline-block pt-1'>5.1%</p> </span></p>
                                </div>

                                <div className='boxTxtMarketCap borderBottomPriceBox mb-1'>
                                    <p className=' text-gray-400 font-medium text-left'>MARKET CAP</p>
                                    <p className='font-semibold text-left flex justify-between'>$172.929.11<span className=' mb-2 inline-block boxStatsIncrement text-white bg-green-500 rounded-md w-16 h-7 pl-1'> <img src={incrementArrow} className=' inline-block relative greenChevron' /> <p className=' inline-block pt-1'>5.1%</p> </span></p>
                                </div>

                                <div className='boxTxtPrice1 borderBottomPriceBox mb-1'>
                                    <p className=' text-gray-400 font-medium text-left'>HOLDERS</p>
                                    <p className='font-semibold text-left flex justify-between'>1721 <span className=' mb-2 inline-block boxStatsIncrement text-white bg-green-500 rounded-md w-16 h-7 pl-1'> <img src={incrementArrow} className=' inline-block relative greenChevron' /> <p className=' inline-block pt-1'>5.1%</p> </span> </p>
                                </div>


                            </div>
                        </div>
                    </div>


                </div>

            </div>


            <div className='flex justify-end asset1Hold'>
                <p className=' w-6 h-6'></p>
                <img src={asset1} className="asset1" />
            </div>

        </div>
    )
}

export default HomePage