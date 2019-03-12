import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
// import Img from "gatsby-image";
import { valor } from "../tool/funciones";

export const DefaultProductosTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <PageContent className="content " content={content} />
    </React.Fragment>
  );
};

DefaultProductosTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  title: PropTypes.string.isRequired
};

const DefaultProductos = ({ data }) => {
  const { cockpitPaginas: post } = data;

  return (
    <Layout titulo={valor(post, "titulo")}>
      <DefaultProductosTemplate
        contentComponent={HTMLContent}
        title={valor(post, "titulo")}
        content={valor(post, "contenido")}
      />
    </Layout>
  );
};

DefaultProductos.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default DefaultProductos;

export const DefaultProductosQuery = graphql`
  query DefaultProductos($id: String!) {
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
