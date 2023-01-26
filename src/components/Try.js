

import a0 from "../assets/0.png"
import a1 from "../assets/1.png"
import a2 from "../assets/twoo.png"
import a3 from "../assets/3.png"
import a4 from "../assets/4.png"
import a5 from "../assets/5.png"
import a6 from "../assets/6.png"
import a7 from "../assets/7.png"
import a8 from "../assets/8.png"
import a9 from "../assets/9.png"
import a10 from "../assets/10.png"
import a11 from "../assets/11.png"
import a12 from "../assets/12.png"
import a13 from "../assets/13.png"
import a14 from "../assets/14.png"
import a15 from "../assets/15.png"
import a16 from "../assets/16.png"
import a17 from "../assets/17.png"
import a18 from "../assets/18.png"
import a19 from "../assets/19.png"
import a20 from "../assets/20.png"
import a21 from "../assets/21.png"
import a22 from "../assets/22.png"
import a23 from "../assets/23.png"
import a24 from "../assets/24.png"
import a25 from "../assets/25.png"
import a26 from "../assets/26.png"
import a27 from "../assets/27.png"
import a28 from "../assets/28.png"
import a29 from "../assets/29.png"
import a30 from "../assets/30.png"
import a31 from "../assets/31.png"


import intersteallar2 from "../assets/interstellar2.png"
import intersteallar3 from "../assets/interstellar3.png"


import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const duration = 200;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};

const Example = () => {
    const [showImageOne, setShowImageOne] = useState(false);
    const [showImageTwo, setShowImageTwo] = useState(false);

    return (
        <div className="try">
            <div onMouseEnter={() => setShowImageOne(true)} onMouseLeave={() => setShowImageOne(false)} className="">
                One
            </div>

            <div onMouseEnter={() => setShowImageTwo(true)} onMouseLeave={() => setShowImageTwo(false)} className="">
                Two
            </div>

            <Transition in={showImageOne} timeout={duration}>
                {state => (
                    <div className="immmHold"> <p>.</p>
                        <img
                            src={intersteallar2}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        />

                    </div>
                )}
            </Transition>


            <Transition in={showImageTwo} timeout={duration}>
                {state => (
                    <div className="immmHold">
                        <p>.</p>
                        <img
                            src={intersteallar3}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        />
                    </div>
                )}
            </Transition>
        </div>
    );
}

export default Example;






