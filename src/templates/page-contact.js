import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
//import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
//import Img from "gatsby-image";
import { valor } from "../tool/funciones";
//import ServiceList from "../components/widgets/ServiceList/ServiceList";

import EnterpriseFeature from "../components/widgets/EnterpriseFeature/EnterpriseFeature";

export const DefaultContactenosTemplate = ({
  title,
  content,
  contentComponent 
}) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <PageContent className="content " content={content} />

      <br />

      <EnterpriseFeature />
    </React.Fragment>
  );
};

DefaultContactenosTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  title: PropTypes.string.isRequired
};

const DefaultContactenos = ({ data }) => {
  const { cockpitPaginas: post } = data;

  return (
    <Layout titulo={valor(post, "titulo")}>
      <DefaultContactenosTemplate
        contentComponent={HTMLContent}
        title={valor(post, "titulo")}
        content={valor(post, "contenido")}
      />
      
    </Layout>
  );
};

DefaultContactenos.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default DefaultContactenos;

export const DefaultContactenosQuery = graphql`
  query DefaultContactenos($id: String!) {
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
