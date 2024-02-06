import React from "react";
import Split from "../Split";
import servicesData from "../../data/services.json";

const Services4 = ({ withBG, withPadding, halfBG, withOutTitle }) => {

  return (
    <section
      className={`services ${withPadding ? "section-padding" : ""} ${
        withBG ? "sub-bg" : ""
      }`}
    >
      <div className="container">
        {!withOutTitle && (
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              Best Features
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Services.
              </h3>
            </Split>
            <span className="tbg">Services</span>
          </div>
        )}
        <div className="row">
          {servicesData.map((service, index) => (
            <div className="col-lg-4" key={service.id}>
              <div
                className={`item ${
                  index != servicesData.length - 1 ? "md-mb50" : ""
                } wow fadeInUp`}
                data-wow-delay={
                  service.id == 1 ? ".5s" : service.id == 2 ? ".3s" : ".8s"
                }
              >
                <span className={`icon ${service.icon}`}></span>
                <h6>{service.title}</h6>
                <p>{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {halfBG && <div className="half-bg bottom"></div>}
    </section>
  );
};

export default Services4;
