import React,{useEffect, Fragment} from 'react';

import MetaData from '../../containers/MetaData';
import case1 from "./assets/case1.png";
import case2 from "./assets/case2.png";
import case3 from "./assets/case3.png";

const Projects = () => {


    useEffect(() => {

        const cards = document.querySelectorAll('.cards');
    
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            entry.target.classList.toggle('show',entry.isIntersecting)
            // if(entry.isIntersecting) observer.unobserve(entry.target)
          })
        },{
          threshold:0.3,
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
     <MetaData title="Projects | BHOOMICAM"/>
    <div className='projectsPage'>





<div className="projectsTitle cards">
    <div className="titleLine"></div>
    <h1>OUR CASE STUDIES</h1>
    <div className="titleLine"></div>
</div>

<div className="caseStudies">

    <div className="caseBox cards">
        <div className="caseSec1">
            <h3><span className='aboutHighlight'> Crop Management</span> using Drone</h3>
            <p>In this case study, we investigated the sensitivity of vegetation indices to understand the management practices in lowbush blueberry fields. Images of the experimental plots were collected with a multispectral camera installed on a Drone.</p>
            <a className='caseSec1Btn' target='_blank' rel="noreferrer" href="https://www.tandfonline.com/doi/full/10.1080/07038992.2022.2070144">Know More</a>
        </div>
        <div className="caseSec2">
            <img src={case1} alt='case1' />
        </div>
    </div>

    <div className="caseLine cards"></div>

    <div className="caseBox cards">
        <div className="caseSec1">
            <h3><span className='aboutHighlight'>PhenoCam</span> based phenology assessment of black spruce trees</h3>
            <p>In this case study, we evaluated the efficacy of time-lapse PhenoCam digital images to understand the phenology of black spruce tree species at daily temporal resolution. We also calibrated our PhenoCam derived phenology parameters with satellite derived vegetation indices. </p>
            <a className='caseSec1Btn' target='_blank' rel="noreferrer" href="https://www.mdpi.com/2072-4292/14/1/100/htm">Know More</a>
        </div>
        <div className="caseSec2">
            <img src={case2} alt='case2' />
        </div>
    </div>

    <div className="caseLine cards"></div>

    <div className="caseBox cards">
        <div className="caseSec1">
            <h3><span className='aboutHighlight'>Biodiversity</span> assessment using <span className='aboutHighlight'>satellite remote sensing</span></h3>
            <p>Space-borne remote sensing missions provide robust, timely and continuous data to assess biodiversity in remote or protected areas, where direct field observations can be prohibited by difficult accessibility. The objective of this case study was to extend the concept of remote sensing-based assessment of beta-diversity to multi-scale domain by multi-resolution optical satellite data.</p>
            <a className='caseSec1Btn' target='_blank' rel="noreferrer" href="https://www.sciencedirect.com/science/article/pii/S1470160X19305059">Know More</a>
        </div>
        <div className="caseSec2">
            <img src={case3} alt='case3' />
        </div>
    </div>
</div>
</div>
    </Fragment>

  )
}

export default Projects