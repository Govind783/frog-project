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
                        <p className=' font-medium'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit <br />
                            officia consequat duis enim velit mollit.</p>
                        <br />

                        <p className=' font-medium'> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br />
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br />
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat <br />
                            sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua <br />
                            dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation <br />
                            veniam consequat sunt nostrud amet.  </p>

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