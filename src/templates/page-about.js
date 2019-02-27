import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Img from "gatsby-image";
import { valor } from "../tool/funciones";
import AboutUs from "../components/widgets/AboutUs/AboutUs";

export const DefaultNosotrosTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <PageContent className="content " content={content} />

      <AboutUs />
    </React.Fragment>
  );
};

DefaultNosotrosTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  title: PropTypes.string.isRequired
};

const DefaultNosotros = ({ data }) => {
  const { cockpitPaginas: post } = data;

  return (
    <Layout titulo={valor(post, "titulo")}>
      <DefaultNosotrosTemplate
        contentComponent={HTMLContent}
        title={valor(post, "titulo")}
        content={valor(post, "contenido")}
      />
    </Layout>
  );
};

DefaultNosotros.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default DefaultNosotros;

export const DefaultNosotrosQuery = graphql`
  query DefaultNosotros($id: String!) {
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
