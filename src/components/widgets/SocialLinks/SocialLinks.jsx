import React from "react";
import { SocialIcon } from "react-social-icons";
import { StaticQuery, graphql } from "gatsby";

class SocialLinks extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allCockpitCorporacion(
              filter: {
                cockpitId: { eq: "5c6460f53262630b3b0002a9" }
                lang: { eq: "es" }
              }
            ) {
              edges {
                node {
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
          <div className="widget-social-links">
            {data.allCockpitTotalstopfire.edges.map((items, i) => {
              return (
                <React.Fragment>
                  {items.node.contenido.value.parsed.map((item, i) => {
                    return (
                      <SocialIcon
                        style={{ height: 32, width: 32 }}
                        fgColor="white"
                        bgColor="transparent"
                        className={item["name"].toString().toLowerCase()}
                        target="_blank"
                        url={item["settings"]["direccion"]}
                        label={item["name"]}
                      />
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

export default SocialLinks;
