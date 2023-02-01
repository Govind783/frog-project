import React from 'react'
import "../styles/SiteMap.css"

const SiteMap = () => {
    return (
        <div className='careersMainParent'>

            <div className='careerSec1 carsec2 capitalize'>
                <div className='sec1TextHold sec1TextHold2 siteMapTextHold'>
                    <p className='joinTeam  text-left uppercase'>SITEMAP </p>

                </div>
            </div>




            <div className='siteMapFooterHold text-black font-medium flex flex-wrap'>
                <footer className="footer p-4 text-base-content popinsFont mainFooter">
                    <div>
                        <span className=" text-black font-bold text-2xl uppercase">ABOUT</span>
                        <a className="link link-hover capitalize">stellar doc</a>
                        <a className="link link-hover capitalize">manifesto</a>
                        <a className="link link-hover capitalize">everlost</a>
                        <a className="link link-hover capitalize">team</a>
                        <a className="link link-hover capitalize">FAQ</a>
                        <a className="link link-hover capitalize">partners</a>
                        <a className="link link-hover capitalize">ambassador program</a>
                        <a className="link link-hover capitalize">liqudity lock</a>
                        <a className="link link-hover capitalize">KYC</a>
                        <a className="link link-hover capitalize">P2E</a>

                    </div>
                    <div>
                        <span className=" text-black font-bold text-2xl uppercase">interstellar</span>
                        <a className="link link-hover capitalize">fueling success</a>
                        <a className="link link-hover capitalize">orbiting P2E</a>
                        <a className="link link-hover capitalize">stellar innovation</a>
                        <a className="link link-hover capitalize">expanding horizions</a>
                        <a className="link link-hover capitalize">gallactic contributions</a>

                    </div>
                    <div>
                        <span className=" text-black font-bold text-2xl uppercase">listings</span>
                        <a className="link link-hover capitalize">bsc scan</a>
                        <a className="link link-hover capitalize">coinMarketCap</a>
                        <a className="link link-hover capitalize">CoinGecko</a>
                        <a className="link link-hover capitalize">Crypto.com</a>
                        <a className="link link-hover capitalize">dextools</a>
                        <a className="link link-hover capitalize">coinstore</a>

                    </div>
                    <div>
                        <span className=" text-black font-bold text-2xl uppercase">socials</span>
                        <a className="link link-hover capitalize">official telegram</a>
                        <a className="link link-hover capitalize">twitter</a>
                        <a className="link link-hover capitalize">medium</a>
                    </div>

                    {/* form */}
                   
                </footer>

            </div>

            <div className='dtoryPartenrship flex flex-wrap justify-end'>
                <p></p>
                <p>Partenered With <span className=' underline'>Dtory Studios </span></p>
            </div>




            <br />

        </div>

    )
}

export default SiteMap