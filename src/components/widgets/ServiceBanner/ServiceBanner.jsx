import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Icon } from "react-icons-kit";

import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
import {ic_settings} from 'react-icons-kit/md/ic_settings'
import { Link } from "gatsby";
import Title from "../Title/Title";
 
import { slugify } from "../../../tool/funciones";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll:1,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        rows: 2,
        slidesPerRow: 1,
      }
    }
  ]
};
class ServiceBanner extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { ...props } = this.props;
    const { Titulo, mini } = props;
    delete props.Titulo;
    delete props.mini;

    return (
      <StaticQuery
        query={graphql`
          query {
            allCockpitServicios(filter: { lang: { eq: "es" } }) {
              edges {
                node {
                  id
                  titulo {
                    value
                  }
                  descripcion {
                    value
                  }
                  portada {
                    value {
                      childImageSharp {
                        fluid(maxWidth: 600, quality: 60, toFormat: JPG) {
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
          const Items = (
            <Slider {...settings}>
              {data.allCockpitServicios.edges.map((item, i) => {
                let slug = "servicios/" + slugify(item.node.titulo.value);

                return (
                  

<div class="item-slider" key={i.toString()}>
<div class="card" >
  <div class="card-image">
    <figure class="image is-3by2">
           <Img
                              style={{
                                width: "100%",
                                height: "100%",
                                margin: "0 auto"
                              }}
                              fluid={
                                item.node.portada.value.childImageSharp.fluid
                              }
                              alt={item.node.titulo.value}
                            />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-32x32 has-text-primary">
              <Icon size={24} icon={ic_settings} />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4 has-text-white">{item.node.titulo.value}</p>
      </div>
    </div>

    <div class="content has-text-light">
      {item.node.descripcion.value}
      
      <br/>
      <Link className="has-text-primary has-text-weight-semibold" to={slug}>Saber más <Icon className="" size={24} icon={ic_keyboard_arrow_right} /></Link>
    </div>
  </div>
</div>
</div>

                
                );
              })}
         </Slider>
          );

          return (
            <React.Fragment>
           
              {mini ? (
                <div className="widget-service-banner">{Items}</div>
              ) : (
                <section class="widget-service-banner">
                  <div class="container">
               <Title
               title="EXTINTORES MULTIPROPOSITOS"
               subtitle="VENTA Y RECARGA DE EXTINTORES EN LIMA"
               content="Vendemos y recargamos extintores contra incendios, llenado con agente extintor garantizado."
               />
                    {Items}
                  </div>
                </section>
              )}
 

            </React.Fragment>
          );
        }}
      />
    );
  }
}

export default ServiceBanner;
