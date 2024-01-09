import React from 'react';
import {Routes,Route} from "react-router-dom";

import Services from '../components/Services/Services';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Team from '../components/Team/Team';
import Outreach from '../components/Outreach/Outreach';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import RentingServicesPage from '../components/RentingServicesPage/RentingServicesPage';
import Drone from '../components/Drone/Drone';

const RouteViews = () => {

  

  return (
    <main>
        <Navbar/>
        <Routes>

            <Route exact path='/' element={<Home/>}/>

            <Route exact path='/projects' element={<Projects/>}/>

            <Route exact path='/services' element={<Services/>}/>

            <Route exact path='/about' element={<About/>}/>

            <Route exact path='/team' element={<Team/>}/>

            <Route exact path='/outreach' element={<Outreach/>}/>

            <Route path='*' element={<PageNotFound/>} />
            <Route exact path="/renting-services" element={<RentingServicesPage/>} />
            <Route exact path="/drone" element={<Drone/>} />
        
      

        </Routes>
        <Footer/>
    </main>
  )
}

export default RouteViews;