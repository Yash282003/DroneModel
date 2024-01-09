import React, { useEffect, Fragment } from "react";

import MetaData from "../../containers/MetaData";
import main from "./assets/main.png";
import slider2 from "./assets/pic2.png";
import slider3 from "./assets/pic3.png";
import outcome from "./assets/pic4.png";
import outcomee from "./assets/outcome.jpeg";
import gal from "./assets/gal.png";
import gal1 from "./assets/gal1.png";
import gal6 from "./assets/gal6.png";
import gal7 from "./assets/gal7.png";
import gal2 from "./assets/gal2.png";
import gal3 from "./assets/gal3.png";
import gal4 from "./assets/gal4.png";
import gal5 from "./assets/gal5.png";
import certificate from "./assets/certificate.png";

const Outreach = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll("[data-carousel-button");
    buttons.forEach((button) => {
      const slideFunc = () => {
        const offset = 1;
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      };

      setInterval(slideFunc, 3000);

      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? -1 : 1;
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      });
    });

    const cards = document.querySelectorAll(".cards");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          // if(entry.isIntersecting) observer.unobserve(entry.target)
        });
      },
      {
        threshold: 0.35,
        rootMargin: "2000px 0px 0px 0px",
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    const onTop = () => {
      window.scrollTo(0, 0);
    };
    onTop();
  }, []);

  return (
    <Fragment>
      <MetaData title="Outreach | BHOOMICAM" />

      <div className="outreachPage">
        <h1>TIMELINE</h1>
        <div className="timeline-wrapper">
          <div className="timeline-left">
            <div className="timeline-container">
              <div className="circle-container">
                <div className="date">
                  NOV <br />
                  2022
                </div>
                <div className="circle"></div>
                <div className="extend-line"></div>
              </div>
              <div className="timeline-main">
                <div className="timeline-img">
                  <img src={main} alt="" />
                </div>
                <div className="body-timeline">
                  1. Bhoomicam, the esteemed innovator, has been honored with a
                  prestigious invitation by the United Nations Congress in
                  Hyderabad to chair a captivating session and grace the
                  audience with an enlightening talk on the revolutionary
                  integration of Artificial Intelligence and satellite-based
                  solutions for transforming agriculture land records.
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="circle-container">
                <div className="date">
                  DEC <br />
                  2022
                </div>
                <div className="circle"></div>
                <div className="extend-line"></div>
              </div>
              <div className="timeline-main">
                <div className="timeline-img">
                  <img src={outcome} alt="" />
                </div>
                <div className="body-timeline">
                  1. Bhoomicam shines in success! Honored at India's Geospatial
                  platform, their groundbreaking idea wins a distinguished
                  bronze award in the ICON-ISRS Contest 2022. Former ISRO
                  chairman Dr. A.S. Kiran Kumar graces the achievement at
                  GeoSmart India Conference, held at HICC Hyderabad.
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="circle-container">
                <div className="date">
                  MAY <br />
                  2023
                </div>
                <div className="circle"></div>
                <div className="extend-line"></div>
              </div>
              <div className="timeline-main">
                <div className="timeline-img">
                  <img src={slider2} alt="" />
                </div>
                <div className="body-timeline">
                  1. Bhoomicam Pvt. Ltd., a pioneering force nurtured by TIDES,
                  IIT Roorkee, empowers Indian farmers with innovative
                  technologies. Their visionary team revolutionizes agriculture,
                  collaborating with regional and national government
                  organizations to bring transformative solutions directly to
                  farmers. Stay tuned for their game-changing debut, reshaping
                  the future of farming and paving the path to prosperity.
                </div>
              </div>
            </div>
            <div className="timeline-container">
              <div className="circle-container">
                <div className="date">
                  JUNE <br />
                  2023
                </div>
                <div className="circle"></div>
                <div className="extend-line"></div>
              </div>
              <div className="timeline-main">
                <div className="timeline-img">
                  <img src={slider3} alt="" />
                </div>
                <div className="body-timeline">
                  Bhoomicam and KVK organized a successful outreach program on
                  World Environment Day, empowering young farmers with
                  sustainable agricultural practices.Through engaging workshops,
                  interactive sessions, and hands-on demonstrations, we sparked
                  a passion for environmental stewardship, ensuring a greener
                  future for all.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="survey">
          <h3>Survey</h3>
          <p className="surveyP">
            Field Survey conducted on 47 Agriculture Lands of 3 villages in
            Bijnor District
          </p>
          <div className="surveyBlockSec">
            <div className="surveyBlock">
              <p> Different Pesticides used</p>
            </div>
            <div className="surveyBlock">
              <p>Various disease/infection pattern and occurrence</p>{" "}
            </div>
            <div className="surveyBlock">
              <p>Different solutions and their opinion on farming culture</p>
            </div>
          </div>
        </div>
        <div className="outcomesSec">
          <div className="outcomeSec1">
            <h3>Major Outcomes</h3>
            <ul>
              <li>Degradation of soil and no scope for soil testing.</li>
              <li>Smart phones available with every household.</li>
              <li>
                No crop specific solution available in spite being asked by the
                farmers.
              </li>
              <li>
                Totally dependent on pesticide sellers and stores for solution.
              </li>
              <li>Mimicking behavior.</li>
            </ul>
          </div>
          <div className="outcomeSec2 cards">
            <img src={outcomee} alt="outcome" />
            <p>In house crop type database generation through smart phones</p>
          </div>
        </div>

        <div className="Gallery">
          <div className="Gallery-imgs">
            <div className="grid-item">
              {" "}
              <img src={gal6} alt="" />{" "}
            </div>
            <div className="grid-item">
              {" "}
              <img src={gal2} alt="" />
            </div>
            <div className="grid-item">
              {" "}
              <img src={gal3} alt="" />
            </div>
            <div className="grid-item">
              {" "}
              <img src={gal7} alt="" />
            </div>
            <div className="grid-item">
              {" "}
              <img src={gal5} alt="" />
            </div>
            <div className="grid-item">
              {" "}
              <img src={gal} alt="" />
            </div>
          </div>

          <div className="gallery-text">
            <div className="line-gallery"></div>
            <div className="text-gallery">Gallery</div>
          </div>
        </div>
        <div className="certificate-bottom">
          <div className="start-line"></div>
          <div className="text-bottom">
            <h3>We are</h3>
            <p> DPIIT Recognized Startup</p>
          </div>
          <div className="mid-line"></div>
          <img src={certificate} alt="" />
          <div className="end-line"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Outreach;
