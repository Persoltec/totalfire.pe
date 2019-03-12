import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Media from "react-media";
import Img from "gatsby-image";
import Title from "../Title/Title";
import SVG from "react-inlinesvg";
import { valor } from "../../../tool/funciones";

class EnterpriseFeature extends React.Component {
  render() {
    const { ...props } = this.props;
    const { isMobile } = props;

    delete props.isMobile;

    return (
      <StaticQuery
        query={graphql`
          query {
            allCockpitOfrecemos(filter: { lang: { eq: "es" } }) {
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
                      publicURL
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          let color = ["rojo", "negro", "blanco"];
          let n = 0;
          return (
            <Media query="(max-width: 599px)">
              {matches =>
                matches ? (
                  <React.Fragment>
                    <div className="widget-enterprise-feature movil">
                      <Title/>
                          {data.allCockpitOfrecemos.edges.map((items, i) => {
                            let setColor = color[n];
                            n = n + 1;
                            if (n > 2) {
                              n = 0;
                            }

                            return (
                              <div className={`media ${setColor}`} key={i.toString()}>
                                <div className="media-left">
                                  <figure class="image is-48x48">
                                    <SVG
                                      className="icono"
                                      src={items.node.portada.value.publicURL}
                                    >
                                      <img
                                        src={items.node.portada.value.publicURL}
                                        className="icono"
                                      />
                                    </SVG>
                                  </figure>
                                </div>
                                <div class="media-content">
                                  <p class="title is-6 is-uppercase has-text-weight-semibold">
                                    {" "}
                                    {valor(items.node, "titulo")}
                                  </p>
                                  <p class="subtitle is-6">
                                    {valor(items.node, "descripcion")}h
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                     
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className="widget-enterprise-feature ">
                     <Title/>
                      <div class="tile   has-text-centered">
                        <div class="tile is-horizontal">
                          {data.allCockpitOfrecemos.edges.map((items, i) => {
                            let setColor = color[n];
                            n = n + 1;
                            if (n > 2) {
                              n = 0;
                            }

                            return (
                              <div
                                key={i.toString()}
                                className={`tile is-parent is-3 ${setColor}`}
                              >
                                <div class="tile is-child   ">
                                  <div className="content">
                                    <SVG
                                      className="icono"
                                      src={items.node.portada.value.publicURL}
                                    >
                                      <img
                                        src={items.node.portada.value.publicURL}
                                        className="icono"
                                      />
                                    </SVG>

                                    <h1 className="title is-size-3-desktop is-size-4-touch">
                                      {valor(items.node, "titulo")}
                                    </h1>

                                    <p className="descripcion  ">
                                      {valor(items.node, "descripcion")}
                                    </p>
                                    <a class="button">Solicitar cotización</a>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )
              }
            </Media>
          );
        }}
      />
    );
  }
}

export default EnterpriseFeature;
