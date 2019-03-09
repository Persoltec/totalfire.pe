import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Icon } from "react-icons-kit";
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
import Particles from 'react-particles-js';
import { Link } from "gatsby";

import { slugify } from "../../../tool/funciones";

class AdBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { ...props } = this.props;
    const { title, buttom, url } = props;
    delete props.title;
    delete props.buttom;
    delete props.url;
       
          return (
            <React.Fragment>
               <section class="widget-ad-bar section">
{/*               <Particles 
                params={{
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": false,
        "value_area": 1500
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 4.872463273808071,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 60,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 410,
        "size": 5,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}} />*/}
              <div className="container">
                <div className="columns is-half-desktop is-full-mobile is-full-tablet">
                  <div class="separador column has-text-left-desktop has-text-centered-mobile"><h4 class="title is-5">{title}</h4></div>
                  <div class="column has-text-right-desktop has-text-centered-mobile"><a class="button is-dark has-text-weight-semibold" >{buttom}<Icon className="has-text-primary" size={24} icon={ic_keyboard_arrow_right} /></a></div>
                </div>
              </div>
              </section>
            </React.Fragment>
          );
        }
 
  }

export default AdBar;
