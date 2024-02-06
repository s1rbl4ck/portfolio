/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import portfolioData from "../../data/portfolio.json";
import Image from "next/image";

const AboutUs2 = ({ skillsTheme }) => {

  const {desc, about, cv, skills} = portfolioData;
  
  const cpStyle = {
    path: {
      stroke: "#75dab4",
    },
    trail: {
      stroke: skillsTheme
        ? skillsTheme == "dark"
          ? "#0f1218"
          : "#e5e5e5"
        : "",
    },
    text: {
      fill: skillsTheme ? (skillsTheme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-title">
                <h6>About Us</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting
                >
                  {desc}
                </h3>
              </Split>
              <p className="wow fadeInUp line-clamp-6" data-wow-delay=".4s">
                {about}
              </p>
              <Split>
                <a href={cv.url} className="simple-btn mt-40" target="_blank" rel="noreferrer">
                  Download C.V
                </a>
              </Split>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <Image width="720" height="480" src="/img/about.jpg" alt="" />
              </div>
              <div className="skills-circle wow fadeInUp" data-wow-delay=".8">
                {skills.map((skill, i) => (
                  <div className="item" key={i}>
                    <div className="skill">
                      <CircularProgressbar
                        value={skill.value}
                        strokeWidth={2}
                        className="custom-font"
                        text={`${skill.value}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      {skill.title}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
