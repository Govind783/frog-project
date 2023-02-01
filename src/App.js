import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Careers from './components/Careers';
import Manifesto from './components/Manifesto';
import FaqComponent from './components/Faq';
import CareerSpecificPage from './components/CareerSpecificPage';
import Partners from './components/Partners';
import AstroNomics from './components/AstroNomics';
import AstroNomicsMobile from './components/AstroNomicsMobile';
import { useState, useEffect } from 'react';
import {
  useWindowSize,
} from '@react-hook/window-size'
import HomePage from './components/HomePage';
import HomePage2 from './components/HomePage2';
import HomePage3 from './components/HomePage3';
import HomePage4 from './components/HomePage4';
import Example from './components/Try';
import NavOrbiting from './components/NavOrbiting';
import Navfueling from './components/Navfueling';
import NavStellar from './components/NavStellar';
import NavExpanding from './components/NavExpanding';
import NavGallectic from './components/NavGallectic';
import CareersNavbar from './components/CareersNavbar';
import ManifestoNav from './components/ManifestoNav';
import SiteMap from './components/SiteMap';

function App() {
  const [width, height] = useWindowSize()

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar />   <HomePage /> <HomePage2 /> <HomePage3 /> <HomePage4 />  </>} />
          <Route path='/careers' element={<><CareersNavbar />   <Careers /> </>} />
          <Route path='/careers/:careerName' element={<> <CareersNavbar />  <CareerSpecificPage /> </>} />
          <Route path='/manifesto' element={<><ManifestoNav />   <Manifesto /> </>} />
          <Route path='/faq' element={<><Navbar />   <FaqComponent /> </>} />
          <Route path='/partners' element={<> <CareersNavbar />  <Partners /> </>} />
          <Route path='/astronomics' element={<><CareersNavbar />   {width > 950 ? <AstroNomics /> : <AstroNomicsMobile />}   </>} />
          <Route path='/try' element={<> <Example />   </>} />
          <Route path='/sitemap' element={<> <CareersNavbar />  <SiteMap /> </>} />


          <Route path='/visionandvalues' element={<>   <Navfueling />   </>} />
          <Route path='/community' element={<>   <NavOrbiting />   </>} />
          <Route path='/metaverse' element={<>   <NavStellar />   </>} />
          <Route path='/horizions' element={<>  <NavExpanding />   </>} />
          <Route path='/interstellar' element={<>   <NavGallectic />   </>} />



        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
