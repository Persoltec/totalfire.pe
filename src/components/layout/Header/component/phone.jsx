import React from "react";
import { findDOMNode } from "react-dom";
import { StaticQuery, graphql } from "gatsby";
import { Icon } from "react-icons-kit";
import { ic_stay_current_portrait } from "react-icons-kit/md/ic_stay_current_portrait";

class Phone extends React.Component {
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
                           <React.Fragment>
                            {data.allCockpitCorporacion.edges.map(
                              (items, i) => {
                                let fono = "";

                                items.node.contenido.value.parsed.forEach(
                                  function(entry) {
                                    if (entry["name"] === "Teléfono") {
                                      fono = entry["settings"]["valor"];
                                    }
                                  }
                                );
                                return (
                                  <a class="top_bar_item">
                    <span className="icon has-text-primary ">
                      <Icon size={16} icon={ic_stay_current_portrait} />
                    </span>
                    <span>
                       {fono}
                    </span>
                  </a>
                                );
                              }
                            )}
                           </React.Fragment>
                        )}
                      />

      </React.Fragment>
    );
  }
}

export default Phone;
