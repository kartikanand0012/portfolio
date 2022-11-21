import React from 'react';
import { useState } from 'react'
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>



            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1
                            ? "qualification__button qualification__active button--flex"
                            : "qualification __button button--flex"
                    }>
                        <i className="uil uil-graduation-cap qualification__icon">
                        </i>Education
                    </div>

                    <div className={
                        toggleState === 1
                            ? "qualification__button qualification__active button--flex"
                            : "qualification __button button--flex"
                    }>
                        <i className="uil uil-briefcase-alt qualification__icon">
                        </i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={
                        toggleState === 1
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                    }>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div className='qualification__box'>
                                <h3 className="qualification__title">Backend Intern</h3>
                                <span className="qualification__subtitle">
                                    Relinns Technology
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calander-alt">
                                    </i> 2022-Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div className='qualification__box'>
                                <h3 className="qualification__title">Software Developer Intern</h3>
                                <span className="qualification__subtitle">
                                    JP Morgan Chase & Co.
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calander-alt">
                                    </i> March - May (2022)
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.Tech CSE </h3>
                                <span className="qualification__subtitle">I.K. GUJRAL PUNJAB TECHNICAL UNIVERSITY</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calander-alt">
                                    </i> 2018-2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>

                                <span className="qualification__line"> </span>
                            </div>
                        </div>


                    </div>

                    {/* <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelors in Technology </h3>
                                <span className="qualification__subtitle">I.K. GUJRAL PUNJAB TECHNICAL UNIVERSITY</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calander-alt">
                                    </i> 2018-2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>

                                <span className="qualification__line"> </span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Backend Intern</h3>
                                <span className="qualification__subtitle">
                                    Relinns Technology 
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calander-alt">
                                    </i> 2022-Present
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Qualification