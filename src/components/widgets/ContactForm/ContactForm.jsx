import React from "react";
import { StaticQuery, graphql } from "gatsby";

import MapInfo from "../../../img/MapInfo.png";
import { Icon } from "react-icons-kit";
import Helmet from "react-helmet";
import { ic_location_on } from "react-icons-kit/md/ic_location_on";
import { ic_phone } from "react-icons-kit/md/ic_phone";
import { ic_stay_current_portrait } from "react-icons-kit/md/ic_stay_current_portrait";
import { ic_mail } from "react-icons-kit/md/ic_mail";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  SendMail(e) {
    e.preventDefault();
    const Email = window.Email;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "persoltec.com@gmail.com",
      Password: "2796c46e-8893-4d08-bb51-b90e47eaee8b",
      To: "ventas@totalstopfireperu.com",
      From: "ventas@totalstopfireperu.com",
      Subject: "test",
      Body:
        "<table role='presentation' cellpadding='0' cellspacing='0' style='vertical-align:top' width='100%' border='0'><tbody><tr><td style='word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px' align='center'><div style='color:#000000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:11px;line-height:22px;text-align:center'><h2 style='font-family:'Cabin',sans-serif;font-size:15px;line-height:100%'>Informacion:</h2></div></td></tr><tr><td style='word-wrap:break-word;font-size:0px;padding:10px 20px 10px 20px' align='center'><div style='color:#000000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:11px;line-height:22px;text-align:center'><p><span style='font-size:12px'><span style='color:#999999'>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test </span></span></p></div></td></tr></tbody></table>"
    }).then(message => alert(message));
  }

  render() {
    const { ...props } = this.props;
    const { name } = props;
    delete props.name;

    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: { frontmatter: { widgets: { eq: "ContactInfo" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    titulo
                    direccion
                    telefono
                    movil
                    correo
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <div className="widget-contact-form" id="widget-contact-form">
              <a href="#" onClick={this.SendMail}>
                Enviar
              </a>
            </div>
          );
        }}
      />
    );
  }
}

export default ContactForm;
