import React from "react";
import { findDOMNode } from "react-dom";
import { StaticQuery, graphql } from "gatsby";

class Mobile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { ...props } = this.props;
    const { titulo } = props;


    return (
      <React.Fragment>
        
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
                                    <div className="telefono has-text-weight-bold is-size-5">
                                      {fono}
                                    </div>
                                );
                              }
                            )}
                          </div>
                        )}
                      />

      </React.Fragment>
    );
  }
}

export default Mobile;
