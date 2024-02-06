/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";
import portfolioData from "../../data/portfolio.json";

const Footer = () => {

  const {email, socials} = portfolioData;

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> {email}
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Me</h6>
                <div className="social">
                  {socials.map((social, i) => (
                    <a href={social.url} className="icon" key={i}>
                      <i className={`fab fa-${social.name.toLowerCase()}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newslatter</h6>
              <p>Sign up for subscribe out newsletter!</p>
              <Formik
                initialValues={{
                  subscribe: "",
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">Subscribe</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            Developed By s1rbl4ck
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
