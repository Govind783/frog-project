import React from 'react'
import "../styles/Careers.css"
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
import arrow from "../assets/arrow.png"
import { Link } from 'react-router-dom';


const Careers = () => {

    const addClassHnadler = () => {
        document.querySelector(".line").classList.add("imageColor")

    }

    const removeClassList = () => {
        document.querySelector(".line").classList.remove("imageColor")
    }

    //2

    const addClassHnadler2 = () => {
        document.querySelector(".line2").classList.add("imageColor")

    }

    const removeClassList2 = () => {
        document.querySelector(".line2").classList.remove("imageColor")
    }

    // 3
    const addClassHnadler3 = () => {
        document.querySelector(".line3").classList.add("imageColor")

    }

    const removeClassList3 = () => {
        document.querySelector(".line3").classList.remove("imageColor")
    }


    //4

    const addClassHnadler4 = () => {
        document.querySelector(".line4").classList.add("imageColor")

    }

    const removeClassList4 = () => {
        document.querySelector(".line4").classList.remove("imageColor")
    }



    return (
        <div className='careersMainParent '>

            <div className='careerSec1 capitalize'>
                <div className='sec1TextHold'>
                    <p className='joinTeam text-left uppercase berlinFont'>Join the team </p>
                    <p className='carPara'> Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
                        amet sint.Velit officia consequat duis enim velit mollit. <br />
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
                        amet sint. </p>

                </div>
            </div>


            <div class="container capitalize popinsFont">
                <Link to={`/careers/art-director`}>
                    <div className='mt-18 a' onMouseOver={addClassHnadler} onMouseLeave={removeClassList}>
                        <div className=" text-start pl-16 th">

                            <p className=' font-bold text-2xl'>Art Director, Branding </p>
                            <p className=' font-semibold text-lg popins'>LOS ANGELES | FULL TIME </p>
                            <p className='greyFont'> CREATIVE </p>
                        </div>

                        <span className='flex justify-end pb-8'>
                            <img src={arrow} className=' inline-block line' />
                        </span>
                    </div>
                </Link>

                {/* the link after "/careers" can be dynamic depending on the job position in this case hard coding it. the later dev can make it dynamic  */}
                <Link to={`/careers/art-director`}>
                    <div className='mt-18 a' onMouseOver={addClassHnadler2} onMouseLeave={removeClassList2}>
                        <div className=" text-start pl-16 th">
                            <p className=' font-bold text-2xl'>Art Director, Branding </p>
                            <p className=' font-semibold text-lg popins'>LOS ANGELES | FULL TIME </p>
                            <p className='greyFont'> CREATIVE </p>
                        </div>

                        <span className='flex justify-end pb-8'>
                            <img src={arrow} className=' inline-block line2' />
                        </span>
                    </div>
                </Link>

                <Link to={`/careers/art-director`}>
                    <div className='mt-18 a a2' onMouseOver={addClassHnadler3} onMouseLeave={removeClassList3}>
                        <div className=" text-start pl-16 th">

                            <p className=' font-bold text-2xl'>Art Director, Branding </p>
                            <p className=' font-semibold text-lg popins'>LOS ANGELES | FULL TIME </p>
                            <p className='greyFont'> CREATIVE </p>
                        </div>

                        <span className='flex justify-end pb-8'>
                            <img src={arrow} className=' inline-block line3' />
                        </span>
                    </div>
                </Link>

                <Link to={`/careers/art-director`}>
                    <div className='mt-18 a a2' onMouseOver={addClassHnadler4} onMouseLeave={removeClassList4}>
                        <div className=" text-start pl-16 th">

                            <p className=' font-bold text-2xl'>Art Director, Branding </p>
                            <p className=' font-semibold text-lg popins'>LOS ANGELES | FULL TIME </p>
                            <p className='greyFont'> CREATIVE </p>
                        </div>

                        <span className='flex justify-end pb-8'>
                            <img src={arrow} className=' inline-block line4' />
                        </span>
                    </div>
                </Link>

            </div>

            <br />

            <div className='dtoryPartenrship dtoryPartenrshipCareers flex flex-wrap justify-end'>
                <p></p>
            </div>

        </div>
    )
}

export default Careers
/*
 

            */