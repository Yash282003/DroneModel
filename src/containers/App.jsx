import React, { useState, useEffect,Fragment } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import WebFont from "webfontloader";


import RouteViews from './RouteViews';
import Loader from '../components/Loader/Loader';
import wheat from '../components/Home/assets/wheat.jpeg';
import about1 from '../components/About/assets/about1.png';
import about2 from '../components/About/assets/about2.jpeg';
import about3 from '../components/About/assets/about3.jpeg';
import about4 from '../components/About/assets/about4.jpeg';
import about5 from '../components/About/assets/about5.jpeg';
import case1 from '../components/Projects/assets/case1.png';
import case2 from '../components/Projects/assets/case2.png';
import case3 from '../components/Projects/assets/case3.png';
import slider1 from '../components/Outreach/assets/slider1.jpeg';
import slider2 from '../components/Outreach/assets/slider2.jpeg';
import slider3 from '../components/Outreach/assets/slider3.jpeg';
import founder from '../components/Team/assets/founder.png';
import logo from '../components/Navbar/assets/logo.png';
import logoTextBlack from '../components/Navbar/assets/logoTextBlack.svg';

const App = () => {

  WebFont.load({
    google:{
      families:["Poppins"]
    }
  })

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs=[
        wheat,about1,about2,about3,about4,about5,case1,case2,case3,slider1,slider2,slider3,founder,logo,logoTextBlack
    ]
    cacheImages(imgs);
  }, [])

  const cacheImages = async (srcArray) =>{

    const promises = await srcArray.map((src)=>{
      return new Promise(function (resolve, reject){
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

  };

  return (
    <Fragment>
        {
          isLoading? (<Loader/>): (
            <Fragment>
                <Router>
                <RouteViews/>
              </Router>
          </Fragment>
          )
        
        }
    </Fragment>

  )
}

export default App;