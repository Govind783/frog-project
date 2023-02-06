import React from 'react'
import frogasset from "../assets/astroFrog.png";
import "../styles/AstroNomicsFinal.css"
import card1 from "../assets/astrocard1.png"
import card2 from "../assets/astrocard2.png";


const AstroNomicsFinal = () => {

    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 246);
    countDownDate.setHours(countDownDate.getHours() + 6);
    countDownDate.setMinutes(countDownDate.getMinutes() + 17);

    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);



    return (
        <div className='AstroNomicsFinalMainParent'>

            <div className='astronomicssFlexParent '>

                <div>
                    <p className=' uppercase font-bold astroHeading1 popinsFont pl-20 text-left'>astronomics</p>
                </div>


                <div className=' flex flex-wrap justify-start pl-20 astromobHold'>

                    <div className='flex flex-col gap-12 mainContentHold'>
                        <p className='astroLine1'></p>
                        <div className='astroBetweenLineContent flex flex-wrap justify-between popinsFont'>

                            <div className='flex flex-col text-left '>
                                <p className=' font-semibold'> TOTAL SUPPLY</p>
                                <p className='astroStats'> 100 QUADRILLION</p>
                                <br />
                                <p className=' font-semibold'>LAUNCH DATE - 24/10/23 </p>
                                <p className='astroStats'>{`${days} DAYS : ${hours} HRS : ${minutes} MNS`}</p>
                            </div>

                            <div className='astroBurnImg popinsFont flex items-center flex-col justify-center'>
                                <img src={card2} className="astroFireHalf" />

                                <p>TOTAL BURN</p>
                                <p> 87%</p>
                                <img src={card1} className="astroFireFull" />
                            </div>
                        </div>

                        <p className='astroLine1'> </p>
                        <div className='astroTokensBtnHold popinsFont flex flex-wrap w-24'>
                            <div className='astroBtnIndivitual'>
                                <p>Reflections: 3% </p>
                            </div>

                            <div className='astroBtnIndivitual'>
                                <p>Dev/Marketing: 3% </p>
                            </div>

                            <div className='astroBtnIndivitual'>
                                <p>FRGST Burn: 2% </p>
                            </div>

                            <div className='astroBtnIndivitual'>
                                <p>Liqudity pool: 3% </p>
                            </div>
                        </div>
                    </div>



                </div>

                <div className='astroFrogImgHold flex justify-end w-full'>
                    <p className='w-1 h-1'></p>
                    <img src={frogasset} className="astroFrog" />
                </div>

            </div>
        </div>
    )
}

export default AstroNomicsFinal