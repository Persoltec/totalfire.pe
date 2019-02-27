import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";

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
            <div className="widget-enterprise-feature">
              <React.Fragment>
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
              </React.Fragment>
            </div>
          );
        }}
      />
    );
  }
}

export default EnterpriseFeature;
