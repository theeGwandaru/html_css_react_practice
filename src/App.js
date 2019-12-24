import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row, Col
} from 'reactstrap';

import './assets/css/theme.css';
import Sidebar from './components/sidebar/sidebar';
import Login from './pages/login';

import photoManWhiteBoard from './assets/images/photo-man-whiteboard.jpg';
import graphicBgCity from './assets/images/graphic-bg-city.svg';
import photoWomanLaptop from './assets/images/photo-woman-laptop.jpg';
import photoTeamDesk from './assets/images/photo-team-desk.jpg';
import avatarFemale from './assets/images/avatar-female-1.jpg';
import avatarMale from './assets/images/avatar-male-1.jpg';
import logoIntercom from './assets/images/logo-intercom.png';
import logoInvision from './assets/images/logo-invision.png';
import logoPaypal from './assets/images/logo-paypal.png';
import logoSlack from './assets/images/logo-slack.png';

function App() {
  return (
    <BrowserRouter>
      <div className="navbar-container">
        <div className="bg-dark navbar-dark">
          <div className="container">
            <Navbar>
              <NavbarBrand>Nairobi Dynamics</NavbarBrand>
              <Nav className="mr-auto">
                <NavItem>
                  <NavLink>Overview</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Pages
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      Landing Pages
                </DropdownItem>
                    <DropdownItem>
                      App Pages
                </DropdownItem>
                    <DropdownItem>
                      Inner Pages
                </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav >
                  <DropdownToggle nav caret>
                    Components
                </DropdownToggle>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink>Sign up</NavLink>
                </NavItem>
                <NavItem><NavLink>or</NavLink></NavItem>
                <NavItem>
                  <NavLink>Sign in</NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </div>
        </div>
      </div>
      <div className="main-container">
        <section className="space-xs text-center bg-gradient text-align">
          <div className="container">
            <Row>
              <Col>
                <span className="mr-2">Use this handy announcement bar to talk about new features</span>
              </Col>
            </Row>
          </div>
        </section>
        <section className="space-lg pt-0">
          <div className="continer">
            <div className="row justify-content-center space-lg">
              <div className="col-12 col-md-9 col-lg-8 text-center">
                <h1 className="display-3">Ready, Set, Grow</h1>
                <span className="lead">A robust suit of styled components, powered by Bootstrap 4. Take the design of your website up a notch</span>
                <Link className="btn btn-success btn-lg">Get started now</Link>
              </div>
            </div>
            <div className="row justify-content-center space-lg">
              <div className="col-12 col-md-9 col-lg-8">
                <div className="video-cover rounded shadow">
                  <img src={photoManWhiteBoard} className="bg-image" />
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" data-src="https://www.youtube.com/embed/oYqvpjKJZkU?autoplay=1&amp;mute=1&amp;showinfo=0&amp;rel=0" allowfullscreen=""></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container aos-init aos-animate">
            <div className="row justify-content-center text-center section-intro">
              <div className="col-12 col-md-9 col-lg-8">
                <span className="title-decorative aos-init aos-animate" data-aos="fade-up" data-aos-delay="10">Welcome Home</span>
                <h2 className="display-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Greatly simplified workflow</h2>
                <span className="lead aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">An opportunity to introduce the major benefits of your product and set the scene for what's to come</span>
              </div>
            </div>
            <ul className="feature-list feature-list-lg">
              <li className="row justify-content-around align-items-center">
                <div className="col-12 col-md-6 col-lg-5">
                  <img src={photoWomanLaptop} className="img-fluid rounded"></img>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                  <h5>Set your phasers to stun</h5>
                  <p className="aos-init">A paragraph, from the Greek paragraphos, "to write beside" or "written beside", is a self-contained unit of a discourse in writing dealing with a particular point or idea.
                    A paragraph consists of one or more sentences
                  </p>
                </div>
              </li>
              <li className="row justify-content-around align-items-center">
                <div className="col-12 col-md-6 col-lg-5 order-lg-2">
                  <img src={photoTeamDesk} className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-6 col-lg-5 order-lg-1">
                  <h5 data-aos="fade-up" data-aos-delay="50" className="aos-init aos-animate">Let the world know</h5>
                  <p data-aos="fade-up" data-aos-delay="150" className="aos-init aos-animate">
                    A paragraph, from the Greek paragraphos, "to write beside" or "written beside", is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.
                    </p>
                  <a href="#" data-aos="fade-up" data-aos-delay="250" className="aos-init aos-animate">More about Team Collaboration ›</a>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row justified-content-center text-center section-intro">
              <ul className="row feature-list">
                <li className="col-12 col-md-4 aos-init aos-animate">
                  <i className="icon-fingerprint h1 text-teal"></i>
                  <h5>Armed and fabulous</h5>
                  <p>
                    A self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.
                </p>
                </li>
                <li className="col-12 col-md-4 aos-init aos-animate">
                  <i className="icon-fingerprint h1 text-teal"></i>
                  <h5>Armed and fabulous</h5>
                  <p>
                    A self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.
                </p>
                </li>
                <li className="col-12 col-md-4 aos-init aos-animate">
                  <i className="icon-fingerprint h1 text-teal"></i>
                  <h5>Armed and fabulous</h5>
                  <p>
                    A self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.
                </p>
                </li>
              </ul>
            </div>
            <div className="row justify-content-center text-center section-outro">
              <div className="col-lg-4 col-md-5">
                <h6>Introducing a new way</h6>
                <p>An opportunity to introduce the major benefits of your product and set the scene for what's to come</p>
                <a href="#">View more features ›</a>
              </div>
            </div>
          </div>
        </section>
        <section>
        <div className="container">
          <div className="row align-items-center justify-content-between section-intro">
            <div className="col-12 col-lg-5 text-center text-lg-left section-intro">
              <span className="title-decorative">Simple Pricing</span>
              <h3 className="display-4">No hidden fees, please.</h3>
              <span className="lead">A robust suite of styled components, powered by Bootstrap 4. Take the design of your website or webapp up a notch.</span>
            </div>
           
            <div className="col-12 col-lg-6 row no-gutters card-group">
              <div className="card pricing card-lg bg-dark col-lg-6">
                <div className="card-body">
                  <h5>Unlimited</h5>
                  <span className="display-3">$9</span>
                  <span className="text-small">per user / month</span>
                  <span className="h6">Includes:</span>
                  <ul className="list-unstyled">
                    <li>
                      Unlimited projects
                    </li>
                    <li>
                      Unlimited repositories
                    </li>
                    <li>
                      Unlimited collaborators
                    </li>
                  </ul>
                  <a href="#" className="btn btn-lg btn-success">Sign up now</a>
                </div>
              </div>
              
              <div className="card pricing card-lg col-lg-6">
                <div className="card-body">
                  <h5>Basic</h5>
                  <span className="display-3">Free</span>
                  <span className="text-small">per user / month</span>
                  <span className="h6">Includes:</span>
                  <ul className="list-unstyled">
                    <li>
                      1 Active project
                    </li>
                    <li>
                      2 Repositories
                    </li>
                    <li>
                      2 Collaborators
                    </li>
                  </ul>
                  <a href="#" className="btn btn-lg btn-outline-primary">Sign up now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h4 data-aos="fade-up" className="aos-init aos-animate">Don’t worry, you’ll be keeping good company</h4>
              <ul className="list-inline list-inline-large">
                <li className="list-inline-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
                  <img alt="Image" className="logo" src={logoPaypal}/>
                </li>
                <li className="list-inline-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                  <img alt="Image" className="logo" src={logoSlack}/>
                </li>
                <li className="list-inline-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                  <img alt="Image" className="logo" src={logoInvision}/>
                </li>
                <li className="list-inline-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <img alt="Image" className="logo" src={logoIntercom}/>
                </li>
              </ul>
            </div>
            
          </div>
         
          <div className="row justify-content-center">

            <div className="col-12 col-md-6 col-lg-5">
              <div className="media">
                <img alt="Image" src="assets/img/avatar-male-1.jpg" className="avatar"/>
                <div className="media-body">
                  <p className="mb-1">
                    “Let’s get one thing straight, this theme’s a straight-up winner. No posers here, just beautiful design and code.”
                  </p>
                  <small>Daniel Cameron</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div className="media">
                <img alt="Image" src="assets/img/avatar-female-1.jpg" className="avatar"/>
                <div className="media-body">
                  <p className="mb-1">
                    “With Wingman, we were able to turn out a stunning landing page and compelling MVP for our SaaS web app in no time.”
                  </p>
                  <small>Caitlyn Halsy, Bench</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="bg-secondary text-center space-lg pb-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="h1">What are you waiting for?</h3>
                <a className="btn btn-lg btn-success">Start free trial</a>
              </div>
            </div>
            <div className="row">
              <img src={graphicBgCity} />
            </div>
          </div>
        </section>

        <footer className="bg-gray text-light footer-long">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3">
                <p className="text-muted">
                  Copyright
                    <br />
                  A product of
                    <br />
                  Nairobi Dynamics
                  </p>
              </div>
              <div className="col-12 col-md-9">
                <span className="h5">A robust suit of styled Components for Bootstrap 4</span>
                <div className="row no-gutters">
                  <div className="col-6 col-lg-3"><h6>Navigate</h6>
                    <ul className="list-unstyled">
                      <li><a>Overview</a></li>
                      <li><a>Landing Pages</a></li>
                      <li><a>App Pages</a></li>
                      <li><a>Inner Pages</a></li>
                    </ul>
                  </div>
                  <div className="col-6 col-lg-3">
                    <h6>Platform</h6>
                    <ul className="list-unstyled">
                      <li><a>Mac OS & iOS</a></li>
                      <li><a>Android & Chrome OS</a></li>
                    </ul>
                  </div>
                  <div className="col-6 col-lg-3">
                    <h6>Community</h6>
                    <ul className="list-unstyled">
                      <li><a>Forum</a></li>
                      <li><a>Knowledgebase</a></li>
                      <li><a>Hire an Expert</a></li>
                      <li><a>FAQ</a></li>
                      <li><a>Contact</a></li>
                    </ul>
                  </div>
                  <div className="col-6 col-lg-3">
                    <h6>Company</h6>
                    <li><a>About Company</a></li>
                    <li><a>History</a></li>
                    <li><a>Team</a></li>
                    <li><a>Investement</a></li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Switch>
        <Route path="login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


{/* <div className="wrapper">
      <Sidebar/>
      <div className="content">
          <p>This is content</p>
      </div>
    </div> */}
