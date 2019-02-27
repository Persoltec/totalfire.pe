import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Icon } from "react-icons-kit";
import { Link } from "gatsby";

import { slugify } from "../../../tool/funciones";

class AboutUs extends React.Component {
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
            allCockpitCorporacion(
              filter: {
                cockpitId: { eq: "5c6465253262630c69000101" }
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
            {data.allCockpitTotalstopfire.edges.map((items, i) => {
              return (
                <React.Fragment>
                  <div className="title">
                    {items.node.contenido.value.parsed[1]["name"]}
                  </div>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html:
                        items.node.contenido.value.parsed[1]["settings"]["html"]
                    }}
                  />
                  <br />
                  <div className="title">
                    {items.node.contenido.value.parsed[2]["name"]}
                  </div>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html:
                        items.node.contenido.value.parsed[2]["settings"]["html"]
                    }}
                  />
                  <br />
                  <div className="title">
                    {items.node.contenido.value.parsed[3]["name"]}
                  </div>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html:
                        items.node.contenido.value.parsed[3]["settings"]["html"]
                    }}
                  />

                  <br />
                  <div className="title">
                    {items.node.contenido.value.parsed[4]["name"]}
                  </div>

                  {items.node.contenido.value.parsed[4]["settings"][
                    "contenido"
                  ].map((item, i) => {
                    return (
                      <React.Fragment>
                        <br />
                        <div className="subtitle">
                          {item["value"]["titulo"]}
                        </div>
                        <div
                          className="text"
                          dangerouslySetInnerHTML={{
                            __html: item["value"]["descripcion"]
                          }}
                        />
                      </React.Fragment>
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

export default AboutUs;
