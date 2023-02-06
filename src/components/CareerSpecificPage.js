import React from 'react'
import "../styles/CareerSpecificPage.css";
import { IoLocationSharp } from "react-icons/io5"

const CareerSpecificPage = () => {

    // the job details are currently hard coded if the future dev wants to make it dynamic I have made the URL id dynamic whihc is =  /careers/:careerName
    // hence  "careerName" is the dynamic id the dev can use "useParams" extract the name and display data of that paticular job dynamically


    return (
        <div className='careersMainParent'>

            <div className='careerSec1 capitalize'>
                <div className='sec1TextHold sec1TextHold2'>
                    <p className='joinTeam jointeam2 text-left uppercase relative left-3'>Visual Director </p>
                    <span className=' inline-block flex mr-32 mb-2 relative left-3 mobLocation1'><IoLocationSharp className="text-5xl inline-block loc2" /> <p className=' inline-block text-4xl font-medium ff remotePt'> Remote , Part Time</p> </span>
                    <p className='carPara'> We are looking for a superstar visual director to lead a high  <br />
                        performing visual and creative organization as the company <br />
                        enters the next stage of its growth. </p>
                </div>
            </div>


            <div className='jobDetailsMainParent text-black text-left font-medium flex flex-wrap popinsFont'>

                <div className='jobDetailsTextHOLD pl-6 pr-6 flex flex-col'>


                    <div className='jobDetailsSEC1 flex flex-col gap-2'>
                        <p>At $FRGST, you will have the chance to construct a decentralized brand at the <br />
                            intersection of art, technology, and culture that will redefine how a global <br />
                            community can collaborate. The distinction between the physical and digital <br />
                            worlds is becoming less distinct, and we are building a team to navigate and <br />
                            lead in this multimedia brand for the future
                        </p>

                        <br />

                        Our goal is to build the largest decentralized brand in the metaverse with the <br />
                        support of our community. We are seeking a talented Art Director to join us in <br />
                        this exciting journey in the rapidly-evolving web3 space. You will work with a <br />
                        dedicated team experienced in crypto, big tech, and startups.
                    </div>


                    <br />
                    <br />


                    <div className='jobDetailsSEC2 text-black flex flex-col gap-4'>
                        <p className='font-bold text-2xl'>Key Responsiblities: </p>
                        <p>Continously enahnce and solidify the $FRGST brand. Develop polished visual <br />
                            guidelines for $FRGST</p>


                        <li>
                            Collaborate with art and marketing teams to design launch campaigns, <br />
                            including conceptualizing and executing photo/video shoots for new product <br />
                            releases.</li>

                        <li>
                            Collaborate with art and marketing teams to design launch campaigns, <br />
                            including conceptualizing and executing photo/video shoots for new product <br />
                            releases.</li>

                        <li>
                            Collaborate with art and marketing teams to design launch campaigns, <br />
                            including conceptualizing and executing photo/video shoots for new product <br />
                            releases.</li>

                    </div>

                    <br />
                    <br />


                    <div className='jobDetailsSEC2 text-black flex flex-col gap-4'>
                        <p className='font-bold text-2xl'>Essential: </p>


                        <li>
                            Proven ability to develop strong and enduring consumer brands with <br />
                            compelling and consistent visual identities across various platforms and <br />
                            touchpoints.</li>

                        <li>
                            Experience working at major consumer brands or agencies that service them.
                        </li>

                        <li>
                            Willingness and ability to perform both hands-on design work (from sketches <br />
                            to final digital assets) and high-level conceptual work that defines the visual <br />
                            principles of the brand.</li>

                    </div>
                    <br />
                    <br />
                    <br />

                </div>


                <br />
                <br />
                <br />

                <div className='flex flex-col fromContainer'>
                    <p className='font-bold text-2xl ml-16 uppercase text-left pt-6'>Apply For the role</p>
                    <form className='flex flex-col mainForm'>
                        <div>
                            <label for="name">FULL NAME <span className=' text-red-600'>*</span></label>
                            <br />
                            <input type="text" className=' border jobInput' placeholder='John Doe' id='name' />
                        </div>

                        <div>
                            <label for="number">PHONE NUMBER<span className=' text-red-600'>*</span></label>
                            <br />
                            <input type="number" id='number' className=' border jobInput' placeholder='000 111 222' />
                        </div>

                        <div>
                            <label for="email">EMAIL<span className=' text-red-600'>*</span></label>
                            <br />
                            <input type="email" id='email' className=' border jobInput' placeholder='johndoe@gmail.com' />
                        </div>

                        <div>
                            <label for="linkedin">LINKEDIN (OPTIONAL)</label>
                            <br />
                            <input type="url" id="linkedin" className=' border jobInput' placeholder='linkedin.com/johndoe' />
                        </div>

                        <div className='resumeConatiner mt2'>
                            <input type="file" id="files" class="hidden" />
                            <label className=' whitespace-nowrap cursor-pointer mobResume '>RESUME <span className=' text-red-600'>*</span></label>
                            <label for="files" className='resumeLabel cursor-pointer hover:bg-gray-700 '>ATTACH</label>
                        </div>

                        <button className='submitBtn mt1 hover:bg-gray-700'>SUBMIT </button>
                    </form>
                </div>


            </div>



          

            <br />

        </div>
    )
}

export default CareerSpecificPage