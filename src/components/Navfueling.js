import React from 'react'
import "../styles/NavFueling.css"
import NavHamburger from './NavHamburger'
import intersteallar1 from "../assets/interstellar1.png"
import hamb from "../assets/navFuelHam.png";

const Navfueling = () => {

   


    return (
        <div className='navFuelingMainParent pt-28'>

            <div className='navFuelingParent flex flex-wrap justify-evenly'>

                <div className='navFuelingTextContainer flex flex-col'>
                    <div className='llll pl-8'>
                        <NavHamburger className="pl-8" />
                    </div>

                    <h1 className='text-5xl fuelingHeading font-bold text-left pl-7 pr-5'>ROADMAP</h1>
                    <p className='text-left popins font-medium pl-7 pr-5 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.<br /> <br />
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do .</p>

                    <p className='text-left popins font-medium pl-7 pr-5 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.<br /> <br />
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do .</p>

                    <p className='text-left popins font-medium pl-7 pr-5 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.<br /> <br />
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do .</p>


                </div>

                <div className='navFuelHold'>
                    <img src={intersteallar1} className="navFuellingImg newClass zoom" data-aos="zoom-in" data-aos-duration="700" />
                </div>

            </div>

            <br />
            <br />
            <br />
            <br />
            <br />



        </div>
    )
}

export default Navfueling