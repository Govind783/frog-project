import React from 'react'
import "../styles/NavFueling.css"
import NavHamburger from './NavHamburger'

import gallecticSinglePage from "../assets/gallecticSinglePage.png"

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

          <form
            method="POST"
            action="https://script.google.com/macros/s/AKfycbzvm46Zj4omuXWo_qDvEvyo9vD7zCdn9q-HWTwsM7Zx33QBUhgBqdgx1ispf_6AaHl0DA/exec"
          >
            <div className='pl-4 textArrHold pr-7'>


              <textarea className="textarea textArr5 font-semibold text-black popins pl-10" placeholder="Add a description..."
                name='Responses'
                required
              ></textarea>
              <label for="submitBtn"></label>

            </div>

            <br />
            <div className='w47rem text-left pl-4'>
              <button className='gelacticBtn font-semibold' id="submitBtn" type="submit">SUBMIT</button>
            </div>
          </form>

        </div>


      </div>

      <div className='navGelaticRowSection flex flex-wrap' data-aos="fade-in">
        <p className='w-6 h-6'></p>
        <img src={gallecticSinglePage} className="navFuellingImg navFuellingImg4 zoom4" alt='alt' />

      </div>




    </div>

  )
}

export default NavGallectic

