import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Gavish Arora</a></h1>
              <span className="email"><i className="icon-mail"></i> gavisharora@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About Me</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Projects</a></li>                 
                </ul>
              </div>
              <div id="resume">
                  <ul><a href="https://drive.google.com/file/d/1jmAxRpOvl8gG35a_94wieTNGsQR3BNpc/view?usp=sharing" target="_blank">RESUME</a></ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/gavish-arora-90577257/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/gavisharora" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"></a></li>
              </ul>
            </nav>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              
               
              
            </nav>
            
          </aside>
        </div>
      </div>
    )
  }
}
