import React from 'react'
import "../styles/AstroNomics.css"
const AstroNomics = () => {
    return (
        <div className='careersMainParent'>

            <div className='careerSec1 carsec2 capitalize'>
                <div className='sec1TextHold sec1TextHold2'>
                    <p className='joinTeam jointeam2 text-left uppercase font-bold'>tokenomics </p>

                </div>
            </div>


            <div className='jobDetailsMainParent text-black text-left font-medium flex flex-wrap popinsFont'>

                <div className='jobDetailsTextHOLD pl-6 pr-6 flex flex-col'>


                    <div className='jobDetailsSEC1 astroSec1 flex flex-col gap-0'>

                        <div className='tokenNomicIndivitual'>
                            <p className='flex gap-7'><span className='darkMargin'></span> <p className='astroHeading'>   Reflections: 3% </p> </p>
                        </div>

                        <p className='astroLine'> </p>

                        <div className='tokenNomicIndivitual'>
                            <p className='flex gap-9'><span className='darkMargin'></span> <p className='astroHeading'>   Dev/Marketin: 3% </p> </p>
                        </div>

                        <p className='astroLine'> </p>


                        <div className='tokenNomicIndivitual'>
                            <p className='flex gap-9'><span className='darkMargin'></span> <p className='astroHeading'>   Liquidity pool: 2% </p> </p>
                        </div>

                        <p className='astroLine'> </p>

                        <div className='tokenNomicIndivitual'>
                            <p className='flex gap-9'><span className='darkMargin'></span> <p className='astroHeading'>   FRGST Burn: 2% </p> </p>
                        </div>


                    </div>
                    <br />
                    <br />
                    <br />
                </div>


                <div className='flex flex-wrap cursor-pointer'>
                    <div className='totalSupplyHold text-center pt-12'>
                        <div>
                            <p className=' font-normal font-serif text-black'> Total supply </p>
                            <p className='font-bold text-xl'> 100 QUADTRILLION </p>
                        </div>
                        <br />

                        <div>
                            <p className=' font-normal font-serif text-black'>Launch Date </p>
                            <p className='font-bold text-xl'> 12/09/23 </p>
                        </div>



                    </div>

                </div>



            </div>




            <br />

        </div>
        )
}

export default AstroNomics