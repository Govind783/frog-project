import React from 'react'
import "../styles/Manifesto.css"
import line from "../assets/momento.png"

const Manifesto = () => {
    return (
        <div className='maniFestoMainParnet bg-white text-black mt-5'>



            <div className='mt-2 pt-11'>
                <p className=' uppercase font-bold text-5xl text-left mainHold'>Manifesto <span className=' font-bold text-5xl'><img src={line} className="mt-4" /> </span>  </p>
            </div>
            
            <div className='manifestoLineHold flex justify-start'>
                <p className='w-2 h-2'></p>
                <p className='faqLine manifestoLine'></p>
            </div>

            <div className=' text-left font-medium maifestoTextHold pl-20 pr-6 popinsFont'>
                <p>
                    Beyond the stars, beyond the night, A future bright, a cosmic sight. <br />
                    Vast and endless, the expanse calls, With promise of discovery, and new horizons for us all. <br />

                    Through the void, we journey forth, To explore, to learn, to grow. With every step, we <br />
                    break new ground, And our understanding continues to flow. <br />

                    The mysteries of the universe, <br />
                    Await to be unraveled, <br />
                    As we reach for the stars, <br />
                    Our horizons are forever traveled. <br />

                    With each new discovery, <br />
                    We take one step further, <br />
                    Towards a future that's bright, <br />
                    And the possibilities that we offer. <br />

                    So come and join us, <br />
                    On this journey to the sky, <br />
                    For the future is ours, <br />
                    And it's time for us to fly. <br />

                    - TO THE MOON AND NEVER BACK

                </p>


            </div>


            <br />
            <br />



            <div className='dtoryPartenrship flex flex-wrap justify-end'>
                <p></p>
                <p>Partenered With <span className=' underline'>Dtory Studios </span></p>
            </div>

        </div>
    )
}

export default Manifesto