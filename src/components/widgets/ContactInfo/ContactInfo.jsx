import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { Icon } from "react-icons-kit";

import { ic_location_on } from "react-icons-kit/md/ic_location_on";
import { ic_phone } from "react-icons-kit/md/ic_phone";
import { ic_stay_current_portrait } from "react-icons-kit/md/ic_stay_current_portrait";
import { ic_mail } from "react-icons-kit/md/ic_mail";

class ContactInfo extends React.Component {
  render() {
    const { ...props } = this.props;
    const { name } = props;
    delete props.name;

    return (
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
          <div className={`${name ? name : " widget-contact-info"}`}>
            {data.allCockpitCorporacion.edges.map((items, i) => {
              var icono = {
                Dirección: ic_location_on,
                Móvil: ic_stay_current_portrait,
                Teléfono: ic_phone,
                Correo: ic_mail
              };

              return (
                <React.Fragment>
                  {items.node.contenido.value.parsed.map((item, i) => {
                    return (
                      <article class="media">
                        <figure class="media-left ">
                          <Icon size={24} icon={icono[item["name"]]} />
                        </figure>
                        <div class="media-content">
                          <div class="content">
                            <p>
                              <strong className="titulo has-text-primary">
                                {item["name"]}
                              </strong>
                              <br />
                              <span className="descripcion">
                                {item["settings"]["valor"]}
                              </span>
                            </p>
                          </div>
                        </div>
                      </article>
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

export default ContactInfo;
