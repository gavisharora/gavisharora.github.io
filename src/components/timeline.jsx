import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> <h1>Facial Recognition</h1><span>August 2019</span></h2>
                        <p>Python project based on facial recognition using OpenCV and Histogram of oriented gradients (HOG) model, it can also be modified to run using Convulutional neural networks (CNN) to increase accuracy, HOG was preferred for its ability to run faster on low end devices without GPUs. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><h1>LinkedIn Automator and Scraper</h1><span>August 2020 - Present</span></h2>
                        <p>This application is based on Python, it involves the use of Selenium WebDriver and BeautifulSoup4 library to first automate LinkedIn seraches and clicks then it attempts to fetch user data including Name, Education History, Work Experience and many other relevant fields. </p>                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><h1> PoS application for local stores </h1><span>September 2020 - Present</span></h2>
                        <p>Several local stores don't use a PoS system and have a hard time managing their inventory and sales. This project aims to make the local shopkeeper's life easier by making a simple to use PoS system. Currently I'm developing the backend in Python and aim to deploy it as an Android app eventually. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><h1>Sudoku Solver</h1><span>June 2020</span></h2>
                        <p>This Python based backend implements a backtracking algorithm to solve a given 81 digit Sudoku string within seconds and outputs the original puzzle as well as the solved puzzle, this project will further be expanded to take input and recognize a Sudoku puzzle from an image or camera live feed which will use neural networks to detect digits.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><h1>WebScrapers using Selenium and BeautifulSoup4</h1><span>August 2020 - September 2020</span></h2>
                        <p>I have made several WebScrapers to fetch valuable data from websites like Flipkart and Justdial to fetch product data and local seller information.</p> 
                      </div>
                    </div>
                  </article>
                  
                  
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
