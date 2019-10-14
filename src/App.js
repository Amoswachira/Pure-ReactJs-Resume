import React, { Component } from 'react';
import './App.css';
import resume from './resume.json';
import Experience from './Experience';
import Project from './Project';
import Skill from './Skill';
import Education from './Education';
import Language from './Language';


class App extends Component {

    renderExperiences() {
        let resultsArray = [];
        resume.experiences.map((item, i) => {
            resultsArray.push(<Experience item={item} key={i} />);
        });
        return resultsArray;
    }

    renderProjects() {
        let resultsArray = [];
        resume.projects.map((item, i) => {
            resultsArray.push(<Project item={item} key={i} />);
        });
        return resultsArray;
    }

    renderSkills() {
        let resultsArray = [];
        resume.skills.map((item, i) => {
            resultsArray.push(<Skill item={item} key={i} />);
        });
        return resultsArray;
    }

    renderEducations() {
        let resultsArray = [];
        resume.education.map((item, i) => {
            resultsArray.push(<Education item={item} key={i} />);
        });
        return resultsArray;
    }

    renderLanguages() {
        let resultsArray = [];
        resume.languages.map((item, i) => {
            resultsArray.push(<Language item={item} key={i} />);
        });
        return resultsArray;
    }

    renderInterests() {
        let resultsArray = [];
        resume.interests.map((item, i) => {
            resultsArray.push(<li key={i}>{item}</li>);
        });
        return resultsArray;
    }

    render() {
        console.log(resume);
        return (
          <div className="wrapper">
            <div className="sidebar-wrapper">
              <div className="profile-container">
                <img className="profile" src={resume.image} alt="" />
                <h1 className="name">{resume.name}</h1>
                <h3 className="tagline">Full Stack Developer</h3>
              </div>

              <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                  <li className="email">
                    <i className="fa fa-envelope"></i>
                    <a href="mailto: yourname@email.com">{resume.email}</a>
                  </li>
                  <li className="phone">
                    <i className="fa fa-phone"></i>
                    <a href="tel:0123 456 789">{resume.phone}</a>
                  </li>
                </ul>
              </div>
              <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                {this.renderEducations()}
              </div>

              <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                  {this.renderLanguages()}
                </ul>
              </div>

              <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                  {this.renderInterests()}
                </ul>
              </div>
            </div>

            <div className="main-wrapper">
              <section className="section summary-section">
                <h2 className="section-title">
                  <i className="fa fa-user"></i>Career Profile
                </h2>
                <div className="summary">
                  <p>
                    {" "}
                    Full stack  developer with hands on experience of
                    designing, developing and maintaining web as well as mobile
                    applications. Possesses diverse experience of creating
                    multiple highly scalable applications using different tech
                    stacks. Adept at understanding the requirements of the
                    clients and delivering projects accordingly. Demonstrates
                    the capability of maintaining code by Fixing bugs as well as
                    conducting end to end testing. Highly skilled at
                    collaborating with team members to ship beautiful products
                    within deadlines. Looking forward to applying the acquired
                    gamut of skills in a challenging role.
                  </p>
                </div>
              </section>

              <section className="section experiences-section">
                <h2 className="section-title">
                  <i className="fa fa-briefcase"></i>Experiences
                </h2>

                {this.renderExperiences()}
              </section>

              <section className="section projects-section">
                <h2 className="section-title">
                  <i className="fa fa-archive"></i>Projects
                </h2>
                <div className="intro">
                  <p>All Projects.</p>
                </div>

                {this.renderProjects()}
              </section>

              <section className="skills-section section">
                <h2 className="section-title">
                  <i className="fa fa-rocket"></i>Skills &amp; Proficiency
                </h2>
                <div className="skillset">{this.renderSkills()}</div>
              </section>
              <section className="skills-section section">
                <h2 className="section-title">
                  <i className="fa fa-rocket"></i>Key Skills 
                </h2>
                <div className="skillset">
                    <p></p>
                    <p>Bug Fixing and Troubleshooting </p>
                    <p>Client Requirements </p>
                    <p> Stable codebase </p>
                    <p>End to end Testing</p>
                    <p>Mobile Apps </p>
                    <p>Web Apps </p>
                    <p>Highly Scalable Applications</p>
                    <p>Stakeholder Management</p>
                    <p>Process Optimization</p>
                    <p>Solutions Architecture and Delivery</p>
                </div>
              </section>
            </div>
          </div>
        );
    }
}

export default App;
