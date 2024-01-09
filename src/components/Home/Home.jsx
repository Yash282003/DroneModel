import React,{useEffect,Fragment} from 'react';
import { Link } from 'react-router-dom';

import MetaData from '../../containers/MetaData';
import agriculture from "./assets/agriculture.svg";
import crop_monitoring from "./assets/crop_monitoring.svg";
import end_end from "./assets/end_end.svg";
import yield_img from "./assets/yield_img.svg";
import hand_mission from "./assets/hand_mission.png";
import farming_mission from "./assets/farming_mission.png";
import drone from "./assets/drone.jpeg";
import farmer from "./assets/farmer.jpeg";
import box1 from "./assets/box1.png";
import box2 from "./assets/box2.svg";
import box3 from "./assets/box3.svg";
import box4 from "./assets/box4.svg";
import team from "./assets/team.jpeg";


const Home = () => {

  useEffect(() => {

    const cards = document.querySelectorAll('.cards');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('show',entry.isIntersecting)
        // if(entry.isIntersecting) observer.unobserve(entry.target)
      })
    },{
      threshold:0.2,
      rootMargin:'2000px 0px 0px 0px'
    });
  
    cards.forEach(card => {
      observer.observe(card)
    })





    const onTop = () => {
      window.scrollTo(0, 0);
    }
    onTop()

  }, [])
  


  return (
    <Fragment>
        <MetaData title="Connecting science with farmers | BHOOMICAM"/>

    <div className='homePage'>

        <div className='introCont'>
        <h1 className='introContHead cards'>BHOOMICAM</h1>
        <h3 className='introContLine cards'>Connecting Science with Farmers</h3>
        <br />
        <h2 className='introLineFarmers'>With over <span style={{color:'lightgreen', fontSize:'2rem', padding:"0 10px"}}>200+</span> farmers digitally connected throughout the country</h2>
        </div>

        <div className="iconsCont">
        
            <div className="iconBox iconBoxone cards">
              <div className="iconBoxImg">
                <img src={agriculture} alt='agriculture'/>
              </div>
              <h6>Digitization of agricultural lands</h6>
              <p>Maintaining the land records in digital form. An easier and faster way to deal with various complications in land records </p>
            </div>

            <div className="iconBox iconBoxone cards">
              <div className="iconBoxImg">
                <img src={crop_monitoring} alt='crop_monitoring'/>
              </div>
              <h6>Crop Health Monitoring</h6>
              <p>Assessing and providing solutions for crop health</p>
            </div>

            <div className="iconBox iconBoxtwo cards">
              <div className="iconBoxImg">
                <img src={yield_img} alt='yield_img'/>
              </div>
              <h6>Yield Estimation</h6>
              <p>Estimation of the production to help companies and farmers to evaluate finances</p>
            </div>

            <div className="iconBox iconBoxtwo cards">
              <div className="iconBoxImg">
                <img src={end_end} alt='end_end' />
              </div>
              <h6>End to End Farming solutions</h6>
              <p>Support to the farmer: From the selection of seeds to selling the product in market</p>
            </div>

        </div>

        <div className="missionCont">
          <div className="missionDetailsBox">
            <h3>our</h3>
            <h2>MISSION</h2>
            <p>Our mission is to provide technology-based solutions at a price point that is reasonable for our customers by combining GIS technology with real-time agricultural data and insights. Our products and services help farmers make decisions that are more well-informed, which eventually leads to an increase in productivity of agricultural products.</p>
          </div>
          <div className="missionImgBox cards">
            <img src={hand_mission} className="missionImg1" alt='hand_mission' />
            <img src={farming_mission} className="missionImg2" alt='farming_mission'  />
          </div>
        </div>

        <div className="droneImageBox cards">
          <img src={drone} alt='drone'  />
        </div>

        <div className="primaryGoals">
          <div className="primaryGoalsImgBox cards">
            <img src={farmer} alt='farmer'  className="primaryGoalsImg"  />
          </div>
          <div className="primaryGoalsListBox">
             <p>The following is a list of the primary goals that our organization strives to achieve:</p> 
              <br />
              <ul>
                <li>Acquire fields for experimental purposes.</li>
                <li>Yield production estimate.</li>
                <li>Making product recommendations and sales of agricultural goods.</li>
                <li>Give farmers access to a variety of options that can help them with agriculture, fisheries, and husbandry. Predictions regarding the soil's linked solutions and nutrients. Connecting farmers to the market.</li>
                <li>Recommendations on the most effective ways to utilize fertilizers, insecticides, water amount, and plant development may be made through the use of a mobile app or over the phone. Prediction of plant growth through AI models.</li>
              </ul>
          </div>

          </div>

        <div className="bhoomicamSec">
          <div className="bhoomicamHead">
            <h3>why</h3>
            <h2>BHOOMICAM</h2>
          </div>
          <div className="bhoomicamCont">
            <div className="bhoomicam-cont-box boxOne">
              <div className="b-c-box-detailBox1 b-c-box-text b-c-one cards"><p>BhoomiCam is addressing the current challenging scenarios of the Indian agriculture sector by integrating small-scale to large-scale farmers at one mobile application platform.</p></div>
              <div className="b-c-box-imgBox b-c-two cards">
                <img src={box1} alt='box1'  />
              </div>
            </div>
            <div className="bhoomicam-cont-box boxTwo">
            <div className="b-c-box-imgBox b-c-one cards">
                <img src={box2} alt='box2' />
              </div>
              <div className="b-c-box-detailBox2 b-c-box-text b-c-two cards"><p>By combining satellite and AI-enabled technologies, we are bridging the knowledge gap among farmers. Farmers now have original, high-quality agro inputs at their fingertips.</p></div>
            </div>
            <div className="bhoomicam-cont-box boxOne">
              <div className="b-c-box-detailBox1 b-c-box-text b-c-one cards"><p>Our intelligent web dashboard and farm level solutions can help you plan your operations at scale if you have a group of farms or farmers to monitor. BhoomiCam aids in achieving uniformity among farms with various climate, soil, and farmer circumstances. </p></div>
              <div className="b-c-box-imgBox b-c-two cards">
                <img src={box3} alt='box3' />
              </div>
            </div>
            <div className="bhoomicam-cont-box boxTwo">
            <div className="b-c-box-imgBox b-c-one cards">
                <img src={box4} alt='box4'/>
              </div>
              <div className="b-c-box-detailBox2 b-c-box-text b-c-two cards"><p>We aid several corporate agricultural businesses and exporters in obtaining the highest calibre product from their farms. Contact us to learn more about our large-scale agricultural solution.</p></div>
            </div>
          </div>
        </div>

        <section className='home_parallax'>
            <div className="spaceshipSec">
              <h4>Helping farmers to take real time decisions for crop growth</h4>
              <p>Applying Data science and AI algorithms for on-farm predictions using smartphone cameras and satellite remote sensing data.</p>
              <Link className='spaceSecButton' to='/projects'>Discover</Link>
            </div>
        </section>
        
        <div className="ourTeamSec">
          <div className="ourTeamDetail">
            <h3>our</h3>
            <h2>TEAM</h2>
            <p>BHOOMICAM is a team of enthusiastic technologists IITians supported by former ISRO scientists and IITs professors as advisors.</p>
            <Link className='ourTeamDetailBtn' to='/team'>Meet Our Team</Link>
          </div>
          <div className="ourTeamImgBox cards">
            <img src={team} alt='team' />
          </div>
        </div>

     </div>
    </Fragment>

  )
}

export default Home;