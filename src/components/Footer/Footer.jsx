import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import logo from "./assets/logo.png"
import logoText from "./assets/logoText.svg"

const Footer = () => {
    console.log(LinkedInIcon);
  return (
    <div className='footer'>
    <div className="footerSec">
            <div className="footerSec1">
                <div className="footerLogo">
                    <div className='footLogoImg'>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="footLogoText">
                        <img src={logoText} alt="logo" />
                        </div>
                </div>
                <div className="footerText">
                    <h6>Connecting Science with Farmers</h6>
                </div>
                <div className="follow">
                    <h3>Follow us</h3>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/siddhartha-khare-503a4429/?trk=public_profile_browsemap&originalSubdomain=in"><LinkedInIcon fontSize='inherit' className='followFirst'/></a>
                    <a target='_blank' rel="noreferrer" href="https://twitter.com/sid_hiker?lang=en"><TwitterIcon fontSize='inherit'/></a>
                </div>
            </div>
            <div className="footerSec2">
                <h3>Connect with us</h3>
                <p>TIDES, Bio-Incubator, 2nd & 3rd Floor, Multi-activity Center</p>
                <p>Indian Institute of Technology, Roorkee, Uttarakhand, 247667</p>
            </div>
    </div>
    <div className="footerCopyright">All Rights Reserved | Privacy Policy</div>

    </div>
  )
}

export default Footer