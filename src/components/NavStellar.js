import React from 'react'
import "../styles/NavFueling.css"
import NavHamburger from './NavHamburger'

import orbitSinlePage from "../assets/stellarSinglePage.png"

const NavStellar = () => {

  const image = document.querySelector('.zoom3');

  setTimeout(() => {

    image.classList.add('animate3');

  }, 0);

  return (
    <div className='navFuelingMainParent navFuelingMainParent3 pt-28'>

      <div className='navFuelingParent flex flex-wrap justify-evenly'>

        <div className='navFuelingTextContainer flex flex-col'>
          <div className='llll pl-8  zindexx'>
            <NavHamburger className="pl-8" />
          </div>

          <h1 className='text-5xl fuelingHeading font-bold text-left pl-7 pr-5 mobHead'>METAVERSE</h1>
          <p className='text-left popins font-medium pl-7 pr-5 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.<br /> <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do .</p>

          <p className='text-left popins font-medium pl-7 pr-5 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.<br /> <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do .</p>

          <p className='text-left popins font-medium pl-7 pr-5 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.<br /> <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do .</p>


        </div>

        <div className='navFuelHold'>
          <img src={orbitSinlePage} className="navFuellingImg navFuellingImg3 zoom3"  />
        </div>

      </div>

      <br />
      <br />
      <br />
      <br />
      <br />



    </div>)
}

export default NavStellar