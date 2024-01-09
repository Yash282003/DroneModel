import React,{useEffect,Fragment} from 'react';

import MetaData from '../../containers/MetaData';
import founder from "./assets/founder.png";
import mem1 from "./assets/mem1.svg";
import mem2 from "./assets/mem2.png";
import mem3 from "./assets/mem3.png";
import omm from "./assets/omm.png";
import priyanshu from "./assets/priyanshu.png";
import priyanshuMehra from "./assets/priyanshuMehra.png";
import raushan from "./assets/raushan.png";
import prakhar from "./assets/prakhar.png";
import shubham from "./assets/shubham.png";
import akash from "./assets/akash.svg";
import apurva from './assets/apurva.jpg';

const Team = () => {


    useEffect(() => {

        const cards = document.querySelectorAll('.cards');
    
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            entry.target.classList.toggle('show',entry.isIntersecting)
            // if(entry.isIntersecting) observer.unobserve(entry.target)
          })
        },{
          threshold:0.2999,
          rootMargin:'10000px 0px 0px 0px'
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
    <MetaData title="Our Team | BHOOMICAM"/>
    <div className='teamPage'>
        <div className="ourTeamTitle cards">
            <div className="titleLine"></div>
            <h1>OUR TEAM</h1>
            <div className="titleLine"></div>
        </div>
        <div className="ourTeamTitleIntro">
            <p>BHOOMICAM is a team of enthusiastic technologists IITians supported by former ISRO scientists and IITs professors as advisors.</p>
        </div>
        <div className="founderTitle cards">
            <div className="titleLine"></div>
            <h1>Founder</h1>
            <div className="titleLine"></div>
        </div>
        <div className="founderSec cards">
            <div className="founderDetail cards">
            <div className="founderDetailTitle">
                <h4>Dr. Siddhartha Khare</h4>
                <p>Founder, Director BHOOMICAM </p>
            </div>
              <div>
                <p>Assistant Professor in Civil Engineering Department at IIT Roorkee. Previously worked as a post-doc researcher at McGill University and University of Quebec at Chicoutimi, Canada. Proficiency with the full ESRI suite of GIS software, processing of remote sensing data (UAVs, Airborne, Satellite), open source QGIS software and PhenoCam sensors.  Expertise in Ecosystem modelling, Phenology, crop health monitoring and Biodiversity Assessment using Machine Learning Algorithms, Predictive Modeling and Data Analysis</p>
              </div>
            </div>
            <div className="founderImgBox cards">
                <img src={founder} alt="" />
            </div>
        </div>
        <div className="projectTeamTitle cards">
            <div className="titleLine"></div>
            <h1>Project Team</h1>
            <div className="titleLine"></div>
        </div>


        <div className="projectTeamSec">


            <div className="projectTeamMem cards">
                <div className="teamMemImg">
                    <img src={mem1} alt='Tushar Bhardwaj' />
                </div>
                <div className="teamMemTitle">
                    <h4>Tushar Bharadwaj</h4>
                    <p>CEO & Managing Director</p>
                </div>
                <p>My area of research is earth observation and forest resource management using artificial intelligence and deep learning. Working on integration and simplification of remote sensing datan with artificial intelligence.</p>
            </div>

            <div className="projectTeamMem cards">
                <div className="teamMemImg">
                    <img src={mem2} alt='Nitish Kumar Boro' />
                </div>
                <div className="teamMemTitle">
                    <h4>Nitish Kumar Boro</h4>
                    <p>Front-end & Back-end developer</p>
                </div>
                <p>I am Nitish Kr Boro, a B.Tech 4th year engineering student at IITR. I'm an android and backend developer at  Bhoomicam. I'm passionate about the idea behind Bhoomicam and love to invent new features for Bhoomicam .</p>
            </div>

            <div className="projectTeamMem cards">
                <div className="teamMemImg">
                    <img src={omm}  alt='Omm Animesh Mishra' />
                </div>
                <div className="teamMemTitle">
                    <h4>Omm Animesh Mishra</h4>
                    <p>Website Developer, B.Tech (CE)</p>
                </div>
                <p>An enthusiastic web developer. Always excited about new innovations and cutting-edge technology. A down to earth techie with an unsatiable appetite to learn something new</p>
            </div>

            <div className="projectTeamMem cards">
                <div className="teamMemImg">
                    <img src={akash} alt='Akash Pandey' />
                </div>
                <div className="teamMemTitle">
                    <h4>Akash Pandey</h4>
                    <p>GIS Analyst</p>
                </div>
                <p>PhD Research Scholar in Geomatics Engineering at IIT Roorkee with the experience working on mapping and monitoring of Agricultural Burning, Phenology, Crop modelling, Forest Fire and Environmental Assessment. Proficiency with Google Earth Engine, QGIS, Python & Machine Learning Algorithms.</p>
            </div>
            

            <div className="projectTeamMem cards">
                <div className="teamMemImg">
                    <img src={raushan} alt='Raushan Raj'/>
                </div>
                <div className="teamMemTitle">
                    <h4>Raushan Raj</h4>
                    <p> Designer, B.Tech (CE)</p>
                </div>
                <p>Obsessed with great Designs & thinking behind it. I design experiences to be remembered. Aspires to build top-notch experiences. Enthusiasm & Curiosity is what drives me. I’m always looking for oppurtunities to add values.</p>
            </div>

            <div className="projectTeamMem cards">
                <div className="teamMemImg">
                    <img src={priyanshu} alt='Priyanshu Gupta' />
                </div>
                <div className="teamMemTitle">
                    <h4>Priyanshu Gupta</h4>
                    <p> Designer, B.Tech (CE)</p>
                </div>
                <p>Turning the boring and same works into something intresting and unique. Mostly observing the UX of daily goods and thinking of improving it. A creative person who also loves to create.</p>
            </div>

            <div className="projectTeamMem cards">
                <div className="teamMemImg">
                    <img src={priyanshuMehra} alt='Priyanshu Mehra'/>
                </div>
                <div className="teamMemTitle">
                    <h4>Priyanshu Mehra</h4>
                    <p> Web Application Developer, B.Tech (CE)</p>
                </div>
                <p>A self-taught Front-end Web Developer based in India with rock-solid clarity in building scalable Front-end Projects with great user experiences.</p>
            </div>

            <div className="projectTeamMem cards">
                <div className="teamMemImg">
                    <img src={prakhar} alt='Prakhar Khatri'/>
                </div>
                <div className="teamMemTitle">
                    <h4>Prakhar Khatri</h4>
                    <p>Web Application Developer, B.Tech (CE)</p>
                </div>
                <p>A passionate Web Developer. Curious to know about new Technologies and new Innovations. Always looking to learn something new. </p>
            </div>
            <div className="projectTeamMem cards">
                <div className="teamMemImg">
                    <img src={apurva} alt='Apurva Chaurasia' />
                </div>
                <div className="teamMemTitle">
                    <h4>Apurva Chaurasia
</h4>
                    <p>Geospatial Engineer And Software Developer</p>
                </div>
                <p>Experience in GIS mapping products. Proficient in python and R programming.</p>
            </div>
            <div className="projectTeamMem cards">
                <div className="teamMemImg">
                    <img src={shubham} alt='Prakhar Khatri'/>
                </div>
                <div className="teamMemTitle">
                    <h4>Shubham Jadhav</h4>
                    <p>AI developer</p>
                </div>
                <p>Solving real world challenges using Artificial Intelligence. I am a creative person who loves technology.</p>
            </div>


        </div>
    </div>
    </Fragment>
  )
}

export default Team;