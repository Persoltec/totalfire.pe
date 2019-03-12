import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
//import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
//import Img from "gatsby-image";
import { valor } from "../tool/funciones";
import ServiceList from "../components/widgets/ServiceList/ServiceList";

export const DefaultServiciosTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <PageContent className="content " content={content} />

      <br />
      <ServiceList mini />
    </React.Fragment>
  );
};

DefaultServiciosTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  title: PropTypes.string.isRequired
};

const DefaultServicios = ({ data }) => {
  const { cockpitPaginas: post } = data;

  return (
    <Layout titulo={valor(post, "titulo")}>
      <DefaultServiciosTemplate
        contentComponent={HTMLContent}
        title={valor(post, "titulo")}
        content={valor(post, "contenido")}
      />
    </Layout>
  );
};

DefaultServicios.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default DefaultServicios;

export const DefaultServiciosQuery = graphql`
  query DefaultServicios($id: String!) {
    cockpitPaginas(id: { eq: $id }) {
      id
      titulo {
        value
      }
      contenido {
        value
      }
    }
  }
`;
