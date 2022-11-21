import React from 'react'
import { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Backend <br /> Developer</h3>
                    </div>

                    <span className="services__button" onClick={() =>
                        toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon">
                        </i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close">
                            </i>

                            <h3 className="services__modal-title">Server-side development</h3>
                            <p className="services__modal-description">
                                Service with more than 1 years of
                                experience. Providing quality work
                                to clients and Companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Led the backend-development of companies
                                        Business Intelligence (Super Admin Dashboard)
                                        generating in more customer revenue.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Designed and implemented scalable APIs for BI and
                                        executed MongoDB queries over 60 mill ion Data
                                        optimize the queries and used Batch Processing.

                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Handle Database queries for better
                                        performace.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web pages Backend development.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Frontend <br /> Developer</h3>
                    </div>

                    <span onClick={() => toggleTab(2)}
                        className="services__button">
                        View More
                        <i className="uil uil-arrow-right services__button-icon">
                        </i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close">
                            </i>

                            <h3 className="services__modal-title">Client-side development</h3>
                            <p className="services__modal-description">
                                Service with more than 1 years of
                                experience. Providing quality work
                                to clients and Companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Develop the Frontend and Design according to Designs given by Clients
                                        and according to requirments
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I use React to create scalable application with better performance.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Implimented SSR on website for its better performance and less loading time.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Past<br />Experiences </h3>
                    </div>

                    <span onClick={() => toggleTab(3)}
                        className="services__button">
                        View More
                        <i className="uil uil-arrow-right services__button-icon">
                        </i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close">
                            </i>

                            <h3 className="services__modal-title">Projects</h3>
                            <p className="services__modal-description">
                                I love to work with startups and learn new things by my collegues
                                .Recently i have worked on a project from israel which contains
                                developer from all over the world, they taught me new concepts about 
                                SSR in react. 
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       I love to solve problems  and i am always ready to face challanges.
                                       During Development
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Coding semantics and optimize code is my preferences.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uli uli-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I can join your team and can communicate very well such that team always know what i am doing.
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
    )
}

export default Services