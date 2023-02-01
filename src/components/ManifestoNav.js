import React from 'react'
import logo from "../assets/manifestoLogo.png";
import "../styles/Navbar.css"
import { Link } from 'react-router-dom';
import { FaTelegramPlane } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { AiFillCaretDown } from "react-icons/ai"
import Hamburger from 'hamburger-react'
import { useState, useEffect } from 'react';
import {
    useWindowSize,
    useWindowWidth,
} from '@react-hook/window-size'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import intersteallar1 from "../assets/interstellar1.png"
import intersteallar2 from "../assets/interstellar2.png"
import intersteallar3 from "../assets/interstellar3.png"
import intersteallar4 from "../assets/intersteallar4.png"
import intersteallar5 from "../assets/interstellar5.png"

import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import navblue from "../assets/navwhite.jpeg"

const ManifestoNav = () => {
    const [width, height] = useWindowSize()
    const onlyWidth = useWindowWidth()

    const [isOpen, setIsOpen] = useState(false); // hamburger

    const [open, setOpen] = useState(false);  // modal


    // mobile nav z-index
    useEffect(() => {
        if (open == false) {
            document.querySelector(".maniFestONavBar").classList.add("z99")
        }

        else {
            document.querySelector(".maniFestONavBar").classList.remove("z99")
        }

    }, [open])


    //modal

    const onOpenModal = () => {
        setOpen(true);
        document.getElementById("modal-container").style.overflow = "hidden";

    }

    const onCloseModal = () => {
        setOpen(false);
        document.getElementById("modal-container").style.overflow = "unset";

    }



    const duration = 200;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 }
    };


    const [showImageOne, setShowImageOne] = useState(false);
    const [showImageTwo, setShowImageTwo] = useState(false);
    const [showImageThree, setShowImageThree] = useState(false);
    const [showImageFour, setShowImageFour] = useState(false);
    const [showImageFive, setShowImageFive] = useState(false);


    return (
        <div>

            <div className="maniFestONavBar pb-8 bg-black flex justify-around pr-6">
                <div className="manifestoLogoHold">
                    <Link to="/" className="btn bg-transparent border-0 hover:bg-transparent normal-case text-xl">
                        <img src={logo} />
                    </Link>
                </div>


                {width <= 1145 ? <>

                    <div className='careerNavZindex'>
                        <div onClick={() => setIsOpen(!isOpen)} className="mt-8" id='manifestoHamBurgerColor'>
                            <Hamburger className=" mt-8 " />
                        </div>


                        <nav className={`sidebar ${isOpen ? "open" : ""}`}>
                            <ul className="flex flex-col gap-11 mt-6 capitalize px-1 fontfam">

                                <nav className={`sidebar ${isOpen ? "open" : ""}`}>
                                    <div className='flex flex-col gap-11 mt-6 capitalize px-1 fontfam'>
                                        <li className='fontItems text-white'>
                                            <Link>Everlist</Link>
                                        </li>

                                        <li className='fontItems'>
                                            <button onClick={onOpenModal}>interstallar</button>
                                        </li>
                                        <li className='fontItems'>
                                            <Link>manifesto</Link>
                                        </li>
                                        <li className='fontItems'>
                                            <Link>buy <AiFillCaretDown className=' inline-block text-sm pb-1' /> </Link>
                                        </li>
                                        <li className='fontItems'>
                                            <li className='fontItems'><Link>stellar doc</Link></li>
                                        </li>

                                        <li className='fontItems'>
                                            <li className=' inline-block '><Link><FaTelegramPlane className=' text-2xl inline-block' /></Link></li>
                                        </li>
                                        <li className='fontItems'>
                                            <li className=' inline-block '><Link><FaTwitter className=' text-2xl inline-block' /> </Link></li>
                                        </li>
                                        <li className='fontItems'>
                                            <li className='fontItems'><Link>more <AiFillCaretDown className=' inline-block text-sm pb-1' /></Link></li>
                                        </li>


                                    </div>
                                </nav>



                            </ul>
                        </nav>
                    </div>

                </>
                    :
                    <div className="flex-none">
                        <ul className="flex gap-11 mt-6 capitalize px-1 fontfam">
                            <li className=' manifestOfontItemsDesktop text-white'><Link> <img src={navblue} className="nav1 relative" /> </Link></li>
                            <li className=' manifestOfontItemsDesktop'><button onClick={onOpenModal}>interstallar</button></li>
                            <li className=' manifestOfontItemsDesktop'><Link>manifesto</Link></li>
                            <li className=' manifestOfontItemsDesktop'><Link>buy <AiFillCaretDown className=' inline-block text-sm pb-1' /> </Link></li>
                            <li className=' manifestOfontItemsDesktop'><Link>stellar doc</Link></li>
                            <li className=' inline-block manifestOnavIconsDesktop '><Link><FaTelegramPlane className=' text-2xl inline-block' /></Link></li>
                            <li className=' inline-block manifestOnavIconsDesktop '><Link><FaTwitter className=' text-2xl inline-block' /> </Link></li>
                            <li className='manifestOfontItemsDesktop'><Link>more <AiFillCaretDown className=' inline-block text-sm pb-1' /></Link></li>
                        </ul>
                    </div>

                }





            </div>
            <div className=' overflow-hidden' id="modal-container">

                <Modal open={open} onClose={onCloseModal}  >

                    <div className='modalTextHold cursor-pointer flex flex-col uppercase justify-center items-center align-middle pt-20 gap-12 overflow-hidden'>
                        <p className='modalText h-16 z-50 font-bold text-5xl' onMouseEnter={() => setShowImageOne(true)} onMouseLeave={() => setShowImageOne(false)}> <Link to="/visionandvalues"> Fueling Success</Link> </p>
                        <p className='modalText h-16 z-50 font-bold text-5xl' onMouseEnter={() => setShowImageTwo(true)} onMouseLeave={() => setShowImageTwo(false)}><Link to="/community">Orbiting P2E</Link></p>
                        <p className='modalText h-16 z-50 font-bold text-5xl' onMouseEnter={() => setShowImageThree(true)} onMouseLeave={() => setShowImageThree(false)}><Link to="/metaverse">Stellar Innovation</Link></p>
                        <p className='modalText h-16 z-50 font-bold text-5xl' onMouseEnter={() => setShowImageFour(true)} onMouseLeave={() => setShowImageFour(false)}>Expanding Horizons</p>
                        <p className='modalText h-16 z-50 font-bold text-5xl' onMouseEnter={() => setShowImageFive(true)} onMouseLeave={() => setShowImageFive(false)}><Link to="/interstellar">Galactic Contributions</Link></p>
                    </div>

                    <Transition in={showImageOne} timeout={duration}>
                        {state => (
                            <div className="immmHold flex justify-end"> <p>.</p>
                                {showImageOne && <img
                                    src={intersteallar1}
                                    className="w-96"
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                />}

                            </div>
                        )}
                    </Transition>


                    <Transition in={showImageTwo} timeout={duration}>
                        {state => (
                            <div className="immmHold2 flex justify-end">
                                <p>.</p>
                                {showImageTwo && <img
                                    src={intersteallar2}
                                    className="w-96 inter2"
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                />}
                            </div>
                        )}
                    </Transition>

                    <Transition in={showImageThree} timeout={duration}>
                        {state => (
                            <div className="immmHold3 flex justify-end">
                                <p>.</p>
                                {showImageThree && <img
                                    src={intersteallar3}
                                    className="w-96"
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                />}
                            </div>
                        )}
                    </Transition>

                    <Transition in={showImageFour} timeout={duration}>
                        {state => (
                            <div className="immmHold4 flex justify-center">
                                <p>.</p>
                                {showImageFour && <img
                                    src={intersteallar4}
                                    className="w-96 inter4"
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                />}
                            </div>
                        )}
                    </Transition>

                    <Transition in={showImageFive} timeout={duration}>
                        {state => (
                            <div className="immmHold5 flex justify-end">
                                <p>.</p>
                                {showImageFive && <img
                                    src={intersteallar5}
                                    className="w-96"
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                />}
                            </div>
                        )}
                    </Transition>

                </Modal>
            </div>

        </div>
    )
}

export default ManifestoNav