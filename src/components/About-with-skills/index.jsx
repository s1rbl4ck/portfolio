import React from "react";
import heroSkillsProgress from "../../common/heroSkillsProgress";
import data from "../../data/descriptions.json";

const AboutWithSkills = () => {
  React.useEffect(() => {
    heroSkillsProgress();
  }, []);
  return (
    <div className="hero-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <div className="sub-title">
                <h6>About Me</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="main-title wow" data-splitting>
                {data.about}
              </h3>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                {data.description}
              </p>
              <a href={data.cv.url} className="simple-btn mt-40" target="_blank" rel="noreferrer">
                Download C.V
              </a>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              {data.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <h6 className="custom-font">{skill.title}</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value={`${skill.value}%`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWithSkills;
