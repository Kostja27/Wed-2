import './App.scss';
import logo from './Assets/Logo.svg'
import Menu from './Assets/Menu.svg'

import image328 from './Assets/Image-387x340.svg'
import React from 'react'
import Card from './Card/card';
import Regist from './Regist/Regist';

const App=()=>{
  return (
    <div>
      <header>
        <div className="wrapper_header">
            <img src={logo} className="header_logo" alt="no"/>
              <nav >
                <a href="#top" className="header_menu">About me</a> <a href="#Relationships" className="header_menu">Relationships</a> <a href="#Regist" className="header_menu">Requirements</a> <a href="#Users" className="header_menu">Users</a> <a href="#Regist" className="header_menu">Sign Up</a> 
              </nav>
              <div className="Drop_menu">
                <img src={Menu} className="header_menu" alt="no"></img>
              {/* <a href="#top" className="Drop_header_menu">About me</a> <a href="#Relationships" className="Drop_header_menu">Relationships</a> <a href="#Regist" className="Drop_header_menu">Requirements</a> <a href="#Users" className="Drop_header_menu">Users</a> <a href="#Regist" className="Drop_header_menu">Sign Up</a> */}
              </div>
        </div>
      </header>
      <div className="body1" >
        <div className="body_wrapper">
          <div className="body1_text">
            <p className="body1_title">Test assignment for front-end developers</p>
            <p className="body1_p">Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion. Therefore, responsive design, programming languages and specific frameworks are the must-have skillsets to look for when assessing your front-end developers.</p>
            <button className="button" ><a href="#Regist">Sign up</a></button>
          </div>
        </div>
      </div>
      <div className="body2" id="Relationships">
        <div className="body2_wrapper">
          <div className="body2_image">
          <img alt="no" src={image328} />
          </div>
          <div className="body2_text">
            <p className="body2_title">Let's get acquainted</p>
            <p className="body2_title2">I'm a good front-end developer</p>
            <p className="body2_p">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
            <button className="button" ><a href="#Regist">Sign up</a></button>
          </div>
        </div>
      </div>
      <Card/>
      <Regist/>
      <footer>
        <div className="footer_text"> specially for the test task</div>
      </footer>
    </div>
    );
}

export default App;
