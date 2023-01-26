import React from 'react'
import "../styles/NavFueling.css"
import NavHamburger from './NavHamburger'

import gallecticSinglePage from "../assets/gallecticSinglePage.png"
import intersteallar5 from "../assets/interstellar5.png"

const NavGallectic = () => {
  return (
    <div className='navFuelingMainParent navFuelingMainParent5 pt-20'>

      <div className='navFuelingParent5 flex flex-wrap justify-evenly'>


        <div className='navFuelingTextContainer5 flex flex-col'>
          <div className='llll pl-6  zindexx'>
            <NavHamburger className="pl-8" />
          </div>

          <h1 className='text-5xl fuelingHeading galecticHeadin4 font-bold text-left pl-5'>GALACTIC CONTRIBUTORS</h1>
          <p className='text-left popins font-medium pl-5 '>Submit your ideas and become a contributor in the galaxy.<br />
            <br />
          </p>

          <div className='pl-4 textArrHold pr-7'>
            <textarea className="textarea textArr5 font-semibold text-black popins pl-10" placeholder="Add a description..."></textarea>
          </div>

          <br />
          <div className='w47rem text-left pl-4'>
            <button className='gelacticBtn font-semibold'>ATTACH</button>
          </div>
        </div>






      </div>

      <div className='navGelaticRowSection flex flex-wrap' data-aos="fade-in">
        <p className='w-6 h-6'></p>
        <img src={gallecticSinglePage} className="navFuellingImg navFuellingImg4 zoom4" />

      </div>




    </div>

  )
}

export default NavGallectic

