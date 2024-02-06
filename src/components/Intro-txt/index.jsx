import React from "react";
import portfolioData from "../../data/portfolio.json";

const IntroTxt = ({subBG}) => {
  const {name, profession, socials} = portfolioData;
  
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      style={{ backgroundImage: "url(/img/slid/freelancer.jpg)" }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <h6>Hello, I&apos;m</h6>
              <h1>{name}</h1>
              <h4>{profession}</h4>
              <div className="social-icon">
                {socials.map((social, i) => (
                  <a href={social.url} key={i} target="_blank" rel="noreferrer" className="icon">
                    <i className={`fab fa-${social.name.toLowerCase()}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt;
