import React,{useEffect,Fragment} from 'react';
import MetaData from '../../containers/MetaData';
import about1 from "./assets/about1.png";
import about2 from "./assets/about2.jpeg";
import about3 from "./assets/about3.jpeg";
import about4 from "./assets/about4.jpeg";
import about5 from "./assets/about5.jpeg";

const About = () => {

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
    <MetaData title="About us | BHOOMICAM"/>
    <div className='aboutPage'>
        <div className="aboutTitle cards">
            <div className="titleLine"></div>
            <h1>ABOUT US</h1>
            <div className="titleLine"></div>
        </div>

        <div className="aboutSec">

            <div className="aboutSecBox about1">
                <div className="aboutSecBoxImg about_division_1 cards">
                    <img src={about1} alt='about1'/>
                </div>
                <div className="aboutsecBox1Detail aboutSecText about_division_2 cards">
                    <p>We are experts of remote sensing solutions for <span className='aboutHighlight'>Agriculture</span></p>
                </div>
            </div>

            <div className="aboutSecBox about2">
                <div className="aboutsecBox2Detail aboutSecText about_division_1 cards">
                    <p><span className='aboutHighlight'>AgroCam</span> family believes in growth with integrity</p>
                </div>
                <div className="aboutSecBoxImg about_division_2 cards">
                    <img src={about2} alt='about2'/>
                </div>
            </div>

            
            <div className="aboutSecBox about1">
                <div className="aboutSecBoxImg about_division_1 cards">
                    <img src={about3} alt='about3' />
                </div>
                <div className="aboutsecBox1Detail aboutSecText about_division_2 cards">
                    <p> To achieve that we value our customers and partners to create a <span className='aboutHighlight'>one stop solution platform</span>  for agricultural solutions</p>
                </div>
            </div>

            <div className="aboutSecBox about2">
                <div className="aboutsecBox2Detail aboutSecText about_division_1 cards">
                    <p>We as a <span className='aboutHighlight'>Team</span>  are passionate for providing solutions for farming which drives us to work enthusiastically</p>
                </div>
                <div className="aboutSecBoxImg about_division_2 cards">
                    <img src={about4} alt='about4' />
                </div>
            </div>

            <div className="aboutSecBox about1">
                <div className="aboutSecBoxImg about_division_1 cards">
                    <img src={about5}  alt='about5'/>
                </div>
                <div className="aboutsecBox1Detail aboutSecText about_division_2 cards">
                    <p>We are excited to simplify the overly complexed farming sector using <span className='aboutHighlight'> Artificial Intelligence</span> and <span className='aboutHighlight'>Remotely sensed data</span> </p>
                </div>
            </div>

        </div>
    </div>
    </Fragment>
  )
}

export default About;