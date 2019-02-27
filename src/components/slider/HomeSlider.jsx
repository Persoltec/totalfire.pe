import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import Img from "gatsby-image";

import { Icon } from "react-icons-kit";
import { ic_navigate_next } from "react-icons-kit/md/ic_navigate_next";
import { ic_navigate_before } from "react-icons-kit/md/ic_navigate_before";
import Slider from "react-slick";

import { valor } from "../../tool/funciones";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

class HomeSlider extends React.PureComponent {
  state = {
    isVisible: false
  };

  onEnterViewport = () => {
    this.setState({
      isVisible: true
    });
  };

  onExitViewport = () => {
    this.setState({
      isVisible: false
    });
  };

  render() {
    const { ...props } = this.props;
    delete props.isMobile;
    const { isVisible } = this.state;

    const SliderAnimation = props => (
      <StaticQuery
        query={graphql`
          query {
            allCockpitPortada(filter: { lang: { eq: "es" } }) {
              edges {
                node {
                  id
                  titulo {
                    value
                  }
                  descripcion {
                    value
                  }
                  direccion {
                    value {
                      titulo {
                        value
                      }
                      direccion {
                        value
                      }
                    }
                  }
                  portada {
                    value {
                      childImageSharp {
                        fluid(maxWidth: 800, quality: 50, toFormat: JPG) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <Slider {...settings}>
              {data.allCockpitPortada.edges.map((items, i) => (
                <React.Fragment>
                  <div className="itemslider" key={items.toString()}>
                    <Img
                      fluid={valor(items.node, "portada").childImageSharp.fluid}
                    />

                    <div class="hero-body is-overlay">
                      <div class="container has-text-centered">
                        <h1 class="title  is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                          {valor(items.node, "titulo")
                            .toString()
                            .toUpperCase()}
                        </h1>

                        <h2 class="subtitle">
                          {valor(items.node, "descripcion")}
                        </h2>
                        <a
                          href={valor(items.node.direccion.value, "direccion")}
                          class="button is-primary"
                        >
                          {valor(items.node.direccion.value, "titulo")}
                        </a>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </Slider>
          </React.Fragment>
        )}
      />
    );

    return (
      <React.Fragment>
        <SliderAnimation />
      </React.Fragment>
    );
  }
}

Slider.propTypes = {
  onEnterChange: PropTypes.func
};

export default HomeSlider;
