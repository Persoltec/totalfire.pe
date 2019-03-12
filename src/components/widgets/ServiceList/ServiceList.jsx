import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

//import { Icon } from "react-icons-kit";
import { Link } from "gatsby";
//import Title from "../Title/Title";

import { slugify } from "../../../tool/funciones";

class ServiceList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    // const { ...props } = this.props;
    // const { Titulo, mini } = props;
    // delete props.Titulo;
    // delete props.mini;

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
            <React.Fragment>
            
                      <div className="columns is-multiline">
              {data.allCockpitServicios.edges.map((item, i) => {
                let slug = "servicios/" + slugify(item.node.titulo.value);

                return (
                  <div className="column is-6">
                    <div class="box" key={i.toString()}>
                      <article class="media">
                        <div class="media-left">
                          <figure class="image is-96x96">
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
                            <p>
                              <strong>
                                {" "}
                                <Link to={slug}>{item.node.titulo.value}</Link>
                              </strong>
                              <br />
                              {item.node.descripcion.value}
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                );
              })}
            </div>


            </React.Fragment>
          );
        }}
      />
    );
  }
}

export default ServiceList;
