import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Icon } from "react-icons-kit";
import { ic_navigate_next } from "react-icons-kit/md/ic_navigate_next";
import { ic_navigate_before } from "react-icons-kit/md/ic_navigate_before";
import Title from "../Title/Title";
import Slider from "react-slick";
import { valor } from "../../../tool/funciones";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }
  ]
};

class BrandProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { ...props } = this.props;
    const { Titulo } = props;
    delete props.Titulo;

    return (
      <StaticQuery
        query={graphql`
          query {
            allCockpitProMarcas(filter: { lang: { eq: "es" } }) {
              edges {
                node {
                  id
                  titulo {
                    value
                  }
                  imagen {
                    value {
                      childImageSharp {
                        fluid(maxWidth: 400, quality: 50) {
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
        render={data => {
          return (
            <section class="widget-brand-products section fondo-white">
              <div class="container">
               
 <Title/>
                <Slider {...settings}>
                  {data.allCockpitProMarcas.edges.map((item, i) => {
                    return (
                      <div key={i.toString()}>
                        <Img
                          style={{ width: "160px", margin: "0 auto" }}
                          sizes={
                            valor(item.node, "imagen").childImageSharp.fluid
                          }
                          alt={valor(item.node, "titulo")}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </section>
          );
        }}
      />
    );
  }
}

export default BrandProducts;
