import React from "react";
import { StaticQuery, graphql } from "gatsby";

class OfficeHours extends React.Component {
  render() {
    // const { ...props } = this.props;
    // const {isMobile   } = props;
    // delete props.isMobile;

    return (
      <StaticQuery
        query={graphql`
          query {
            allCockpitTotalstopfire(
              filter: {
                cockpitId: { eq: "5c64355d32626302d90003e2" }
                lang: { eq: "es" }
              }
            ) {
              edges {
                node {
                  id
                  lang
                  titulo {
                    value
                  }
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
          <div className="widget-office-hours">
            {data.allCockpitTotalstopfire.edges.map((items, i) => {
              return (
                <React.Fragment>
                  {items.node.contenido.value.parsed.map((item, i) => {
                    return (
                      <div className="level">
                        <div className="level-left"> {item["name"]}</div>
                        {String(item["settings"]["estado"]) === "Abierto" ? (
                          <div className="level-right ">
                            {" "}
                            {item["settings"]["apertura"]}
                            {"AM - "} {item["settings"]["cierre"]}PM{" "}
                          </div>
                        ) : (
                          <div className="level-right has-text-primary">
                            Cerrado
                          </div>
                        )}
                      </div>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        )}
      />
    );
  }
}

export default OfficeHours;
