import React from "react";
import { findDOMNode } from "react-dom";
import { Icon } from "react-icons-kit";
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
//import VisibilitySensor from "react-visibility-sensor";
import { StickyContainer, Sticky } from "react-sticky";
import HomeSlider from "../../../slider/HomeSlider";
import { Link } from "gatsby";
//import Logo from "../Logo/Logo.jsx";
import logo from "../../../../img/logo.png";
import portada from "../../../../img/portada.jpg";
import { StaticQuery, graphql } from "gatsby";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";
import { ic_phone_in_talk } from "react-icons-kit/md/ic_phone_in_talk";

import { slide as Menu } from "react-burger-menu";
import SocialLinks from "../../../widgets/SocialLinks/SocialLinks.jsx";
import MenuInline from "../component/menu-inline.jsx";
import Phone from "../component/phone.jsx";
import Mobile from "../component/mobile.jsx";
import Mail from "../component/email.jsx";
import Portada from "../component/Portada.jsx";
import Img from "gatsby-image";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  componentDidMount() {}

  state = {
    fixed: false,
    MovilMenu: false,
    OpenCloseMenu: false
  };

  //visibilitySensorChange = val => {
    // if (val) {
    //   this.setState({ fixed: false });
    // } else {
    //   this.setState({ fixed: true });
    // }
  //};

  OpenClose = () => {
    this.setState({
      OpenCloseMenu: !this.state.OpenCloseMenu
    });
  };

  getHeaderSize = () => {
    const fixed = this.state.fixed ? "fixed" : "";
    const homepage = this.props.path === "/" ? "homepage" : "";

    return `${fixed} ${homepage}`;
  };

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const { ...props } = this.props;
    const { titulo } = props;

    const { fixed, OpenCloseMenu } = this.state;

    return (
      <React.Fragment>
        <div>
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={state => this.handleStateChange(state)}
            right
          >
            <aside class="menu">
              <ul class="menu-list">
                <li>
                  <Link className="menu-item" to="/">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link className="menu-item" to="nosotros">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link className="menu-item" to="productos">
                    Productos
                  </Link>
                </li>
              </ul>

              <ul class="menu-list">
                <li>
                  <Link className="is-active menu-list-title" to="servicios">
                    Servicios
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className="menu-item"
                        to="servicios/recarga-de-extintores"
                      >
                        Recarga de Extintores
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-item" to="servicios/mantenimiento">
                        Mantenimiento
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-item" to="servicios/inspecciones">
                        Inspecciones
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-item" to="servicios/capacitacion">
                        Capacitación
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="menu-item" to="contactenos">
                    Contáctenos
                  </Link>
                </li>
              </ul>
              <SocialLinks />
            </aside>
          </Menu>
        </div>

        <section
          id="header"
          className={`hero ${
            titulo ? " is-medium" : " is-fullheight"
          } is-light is-bold header`}
        >
          {titulo && (
            <Portada/>
          )}

          <div class="hero-head">
            {/* TopBar----Home----------- */}
            {/*<VisibilitySensor partialVisibility={true} onChange={this.visibilitySensorChange}>*/}

            <nav  class="navbar topbar is-dark is-hidden-touch">
              <div class="container">
                <div class="navbar-menu">
                  <div class="navbar-start">
                    <a
                      class="navbar-item is-active has-background-primary"
                      href="#"
                    >
                      Catálogo
                    </a>
                    <a class="navbar-item" href="#">
                      Brochure
                    </a>
                    <a class="navbar-item" href="#">
                      Personal
                    </a>
                  </div>
                  <div class="navbar-end">
                    <div class="navbar-item">
                      <Mail />
                      <Phone />
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* </VisibilitySensor>*/}
            {/* TopBar----End----------- */}

            {/*            <nav
              className={`navbar is-white main  ${this.getHeaderSize()}`}
              role="navigation"
              aria-label="main navigation"
            >*/}

            <Sticky className="" topOffset = { 200 } >
              {({ style ,isSticky}) => (
                <nav
                style={style}

                  className={`navbar is-white main ${isSticky}`}
                  role="navigation"
                  aria-label="main navigation"
                >
                  <div class="container">
                    <div class="navbar-brand">
                      <Link className="navbar-item logo" to="/">
                        <img src={logo} />
                      </Link>

                      <a
                        role="button"
                        class="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="header"
                        onClick={() => this.toggleMenu()}
                      >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                      </a>
                    </div>

                    <div
                      id="navMenu"
                      class="navbar-menu has-text-weight-semibold"
                    >
                      <div class="navbar-end">
                        <MenuInline />
                      </div>
                    </div>

                    <div class="navbar-end is-hidden-touch">
                      <div class="navbar-item">
                        <div class="buttons">
                          <Link to="contactenos" className="button is-primary gradient">
                            <strong>Contáctenos</strong>
                          </Link>
                        </div>
                      </div>

                      <div class="ventas navbar-item is-hidden-touch">
                        <div>
                          <div class="is-capitalized is-size-7">
                            <span className="texto">Información? </span>
                            <Icon
                              className="icono"
                              size={24}
                              icon={ic_phone_in_talk}
                            />
                          </div>

                          <Mobile />
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              )}
            </Sticky>
          </div>
      {/*    {!titulo1 && <HomeSlider />}*/}
          {!titulo && (
<div class="hero-body">
    <div class="container has-text-left">
  <div className="content-info">

    <h1 class="title  is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
        Seguridad contra incendio
      </h1>
      <h2 class="subtitle ">
        Total Fire se ha ganado una excelente reputación por su calidad, fiabilidad y valor dentro de la industria de la seguridad contra incendios a nivel comercial e industrial.
      </h2>
<a class="button is-dark has-text-weight-semibold" >Contactános<Icon className="has-text-primary" size={24} icon={ic_keyboard_arrow_right} /></a>
<a class="button is-primary gradient has-text-weight-semibold " >Brochure<Icon className="has-text-dark" size={24} icon={ic_keyboard_arrow_right} /></a>


                            </div>
                            </div>
    <Portada/>
      
  </div>





            )}








          {titulo && (
            <div class="hero-body title">
              <div class="container  has-text-centered">
                <h1 class="title">{titulo}</h1>

                <nav
                  class="breadcrumb is-centered is-small"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="#">Inicio</a>
                    </li>
                    <li class="is-active has-text-primary">
                      <a href="#" aria-current="page">
                        {titulo}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}

          <div class="hero-foot has-text-centered">
            <div class="container">
              <a href="#widget-contact-form">
                <Icon size={48} icon={ic_keyboard_arrow_down} />
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
