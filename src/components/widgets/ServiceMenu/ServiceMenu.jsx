import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

//import { Icon } from "react-icons-kit";
import { Link } from "gatsby";

import { slugify } from "../../../tool/funciones";

class ServiceMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    // const { ...props } = this.props;
    // const { Titulo } = props;
    // delete props.Titulo;

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
                        fluid(maxWidth: 200, quality: 50, toFormat: JPG) {
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
            <div className="widget-service-menu">
              <h1 className="title is-size-4 is-uppercase">
                Nuestros Servicios
              </h1>

              <div className="items">
                {data.allCockpitServicios.edges.map((item, i) => {
                  let slug = "servicios/" + slugify(item.node.titulo.value);

                  return (
                    <Link
                      key={i.toString()}
                      className="has-text-dark"
                      to={slug}
                    >
                      <article class="media">
                        <div class="media-left">
                          <figure class="image is-48x48">
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
                        <div class="media-content">
                          <div class="content">
                            <h4 class="title is-6 has-text-grey-darker is-uppercase">
                              {item.node.titulo.value}
                            </h4>
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default ServiceMenu;
