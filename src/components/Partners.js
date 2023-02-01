import React from 'react'
import "../styles/Partners.css"
import figma from "../assets/figma1.png"
import second from "../assets/2.png"
import solana from "../assets/sol3.png"
import meta from "../assets/meta4.png"
import dtory from "../assets/dtory5.png"
import lens from "../assets/lens6.png"



const Partners = () => {
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


                <div className='flex flex-wrap cursor-pointer partnerImgHold'>
                    <div>
                        <img src={figma} className="figma" />
                    </div>

                    <div>
                        <img src={second} className="ologo" />
                    </div>

                    <div>
                        <img src={solana} className="sol" />
                    </div>

                    <div>
                        <img src={meta} className="meta" />
                    </div>

                    <div>
                        <img src={dtory} className="dtory" />
                    </div>

                    <div>
                        <img src={lens} className="lens" />
                    </div>

                    <br />
                    <br />
                </div>





            </div>

            <div className='dtoryPartenrship flex flex-wrap justify-end'>
                <p></p>
                <p>Partenered With <span className=' underline'>Dtory Studios </span></p>
            </div>




            <br />

        </div>
    )
}

export default Partners