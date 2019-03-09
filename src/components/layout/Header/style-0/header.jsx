import React from "react";
import { findDOMNode } from "react-dom";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";
import VisibilitySensor from "react-visibility-sensor";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";
import HomeSlider from "../../../slider/HomeSlider";
import { Link } from "gatsby";
//import Logo from "../Logo/Logo.jsx";
import logo from "../../../../img/logo.png";
import { StaticQuery, graphql } from "gatsby";

import { ic_phone_in_talk } from "react-icons-kit/md/ic_phone_in_talk";

import { slide as Menu } from "react-burger-menu";
import SocialLinks from "../../../widgets/SocialLinks/SocialLinks.jsx";

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

  visibilitySensorChange = val => {
    if (val) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  };

  OpenClose = () => {
    this.setState({
      OpenCloseMenu: !this.state.OpenCloseMenu
    });
  };

  getHeaderSize = () => {
    const fixed = this.state.fixed ? "fixed header-white is-white" : "";
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
          } is-dark is-bold header`}
        >
          <div class="hero-head">
            <nav
              className={`navbar  is-fixed-top ${this.getHeaderSize()}`}
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

                <div id="navMenu" class="navbar-menu has-text-centered-touch">
                  <div class="navbar-start">
                    <Link to="/" className="navbar-item">
                      Inicio
                    </Link>

                    <Link to="nosotros" className="navbar-item">
                      Nosotros
                    </Link>
                    <Link to="productos" className="navbar-item">
                      Productos
                    </Link>
                    <Link to="servicios" className="navbar-item">
                      Servicios
                    </Link>

                    <Link
                      to="contactenos"
                      className="navbar-item is-hidden-desktop"
                    >
                      Contáctenos
                    </Link>
                  </div>
                </div>

                <div class="navbar-end is-hidden-touch">
                  <div class="navbar-item">
                    <div class="buttons">
                      <Link to="contactenos" className="button is-primary">
                        <strong>Contáctenos</strong>
                      </Link>
                    </div>
                  </div>

                  <div class="ventas navbar-item has-text-light is-hidden-touch">
                    <div>
                      <div class="is-capitalized is-size-7">
                        <span className="texto">Informacion? </span>
                        <Icon
                          className="icono"
                          size={24}
                          icon={ic_phone_in_talk}
                        />
                      </div>

                      <StaticQuery
                        query={graphql`
                          query {
                            allCockpitCorporacion(
                              filter: {
                                cockpitId: { eq: "5c64868e326263101b0000f8" }
                                lang: { eq: "es" }
                              }
                            ) {
                              edges {
                                node {
                                  contenido {
                                    value {
                                      parsed
                                    }
                                  }
                                }
                              }
                            }
                          }
                        `}
                        render={data => (
                          <div className="widget-social-links">
                            {data.allCockpitCorporacion.edges.map(
                              (items, i) => {
                                let fono = "";

                                items.node.contenido.value.parsed.forEach(
                                  function(entry) {
                                    if (entry["name"] === "Móvil") {
                                      fono = entry["settings"]["valor"];
                                    }
                                  }
                                );
                                return (
                                  <React.Fragment>
                                    <div className="telefono has-text-weight-bold is-size-5">
                                      {fono}
                                    </div>
                                  </React.Fragment>
                                );
                              }
                            )}
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {!titulo && <HomeSlider />}

          {titulo && (
            <div class="hero-body">
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
            <VisibilitySensor onChange={this.visibilitySensorChange}>
              <div class="container">
                <a href="#widget-contact-form">
                  <Icon size={48} icon={ic_keyboard_arrow_down} />
                </a>
              </div>
            </VisibilitySensor>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
