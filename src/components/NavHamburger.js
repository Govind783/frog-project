import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import intersteallar1 from "../assets/interstellar1.png"
import intersteallar2 from "../assets/interstellar2.png"
import intersteallar3 from "../assets/interstellar3.png"
import intersteallar4 from "../assets/intersteallar4.png"
import intersteallar5 from "../assets/interstellar5.png"
import { Transition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import "../styles/NavFueling.css"
import { GiHamburgerMenu } from "react-icons/gi"
import hamb from "../assets/navFuelHam.png";


const NavHamburger = () => {

    const [isOpen, setIsOpen] = useState(false); // hamburger

    const [open, setOpen] = useState(false);  // modal

    const onOpenModal = () => {
        setOpen(true);
    }

    const onCloseModal = () => {
        setOpen(false);
    }


    const duration = 200;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 0.5 },
        exited: { opacity: 0 }
    };


    const [showImageOne, setShowImageOne] = useState(false);
    const [showImageTwo, setShowImageTwo] = useState(false);
    const [showImageThree, setShowImageThree] = useState(false);
    const [showImageFour, setShowImageFour] = useState(false);
    const [showImageFive, setShowImageFive] = useState(false);

    return (
        <div>

            {open === false ? <img src={hamb} className="cursor-pointer w-16  mb-14 mr-5 hamb" onClick={onOpenModal} /> : ""}

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
    )
}

export default NavHamburger