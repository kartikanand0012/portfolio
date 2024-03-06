import React from "react";
import { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Server-side development</h3>
			  <ul className="services__modal-services grid">
			  <label>
                  <strong>1. Internal CRM Ticketing Service Development:</strong>{" "}
                </label>
                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Spearheaded the backend development of an internal CRM
                    ticketing service, incorporating cutting-edge features like
                    WABA, auto order cancellation, and auto Instant Refund.
                  </p>
                </p>
                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Focused on enhancing customer query management and
                    streamlining response efficiency, thus elevating the overall
                    customer experience.
                  </p>
                </p>
                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    The service significantly improved the speed and accuracy of
                    customer service interactions, setting a new standard in CRM
                    efficiency.
                  </p>
                </p>
				<label>
                  <strong>2. Finance Operations Streamlining:</strong>{" "}
                </label>
                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Collaborated closely with the finance team to integrate
                    financial operations into the ticketing service, drawing on
                    my experience from JP Morgan.
                  </p>
                </p>
                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Focused on creating streamlined processes and systems that
                    enhanced financial tracking and reporting accuracy.
                  </p>
                </p>
                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    This collaboration resulted in more efficient financial
                    operations, reduced errors, and improved financial
                    transparency.
                  </p>
                </p>
                <label>
                  <strong>3. Customer Engagement Dashboard:</strong>{" "}
                </label>
                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p>
                    Focused on delivering real-time analytics, aiding in
                    strategic decision-making and enhancing customer
                    understanding.
                  </p>
                </p>
                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p>
                    Seamlessly integrated ElasticSearch to ensure efficient data
                    handling and query processing, tailored for a large-scale
                    B2C environment.
                  </p>
                </p>
                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p>
                    Developed an advanced backend system for a high-performance
                    dashboard, delivering critical insights into customer
                    engagement metrics.
                  </p>
                </p>
                <label>
                  <strong>
                    4. Automated Ticket Raising and Resolution Processes:
                  </strong>{" "}
                </label>
                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Innovated in the field of process automation by developing a
                    system for automating ticket raising and resolution,
                    significantly reducing manual intervention.
                  </p>
                </p>

                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    This automation aligned perfectly with the company’s goals
                    for scaling and API optimization, leading to increased
                    operational efficiency.
                  </p>
                </p>
                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    The system's impact was profound, leading to a measurable
                    decrease in response times and an increase in customer
                    satisfaction metrics.
                  </p>
                </p>
                <label>
                  <strong>
                    5. System Metrics Enhancement through CRM Integration:
                  </strong>{" "}
                </label>
                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Played a pivotal role in achieving a more cohesive data
                    ecosystem, enabling better tracking of customer interactions
                    and performance metrics.
                  </p>
                </p>
                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    This integration facilitated improved data oversight and
                    enhanced analytics capabilities, leading to more informed
                    business decisions.
                  </p>
                </p>

                <p className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Strategically enhanced system metrics by integrating the
                    internal CRM with platforms like Clickpost, Moengage, and
                    Freshworks.
                  </p>
                </p>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Developer
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Client-side development</h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to clients and Companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Develop the Frontend and Design according to Designs given
                    by Clients and according to requirments
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    I use React to create scalable application with better
                    performance.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Implimented SSR on website for its better performance and
                    less loading time.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Past
              <br />
              Experiences{" "}
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Projects</h3>
              <p className="services__modal-description">
                I love to work with startups and learn new things by my
                collegues .Recently i have worked on a project from israel which
                contains developer from all over the world, they taught me new
                concepts about SSR in react.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info"></p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    I love to solve problems and i am always ready to face
                    challanges. During Development
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Coding semantics and optimize code is my preferences.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uli uli-check-circle 
                                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    I can join your team and can communicate very well such that
                    team always know what i am doing.
                  </p>
                </li>

                {/* <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
