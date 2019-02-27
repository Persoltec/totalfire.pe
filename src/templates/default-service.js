import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Img from "gatsby-image";
import { valor } from "../tool/funciones";

export const DefaultServiceTemplate = ({
  portada,
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <Img
        style={{ maxHeight: "300px", margin: "0 auto" }}
        fluid={portada.childImageSharp.fluid}
        alt={title}
      />
      <br />
      <PageContent className="content " content={content} />
    </React.Fragment>
  );
};

DefaultServiceTemplate.propTypes = {
  portada: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string.isRequired
};
const DefaultService = ({ data }) => {
  const { cockpitServicios: post } = data;

  return (
    <Layout titulo={valor(post, "titulo")}>
      <DefaultServiceTemplate
        portada={valor(post, "portada")}
        contentComponent={HTMLContent}
        title={valor(post, "titulo")}
        content={valor(post, "contenido")}
      />
    </Layout>
  );
};

DefaultService.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default DefaultService;

export const DefaultServiceQuery = graphql`
  query DefaultService($id: String!) {
    cockpitServicios(id: { eq: $id }) {
      id
      titulo {
        value
      }
      contenido {
        value
      }

      portada {
        value {
          childImageSharp {
            fluid(maxWidth: 800, quality: 50, toFormat: JPG) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
