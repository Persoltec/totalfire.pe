import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const BrandProductsTemplate = ({
  content,
  contentComponent,
  descripcion,
  titulo,
  codigo,
  imagen
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Layout>
      <section className="uk-container uk-animation-fade uk-animation-slide-bottom-small uk-animation-fast">
        <Helmet title={`${titulo} | Marca`} />
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className=" ">{titulo}</h1>

              <p>{descripcion}</p>
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

BrandProductsTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  descripcion: PropTypes.string,
  titulo: PropTypes.string,
  codigo: PropTypes.string
};

const BrandProducts = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BrandProductsTemplate
      content={post.html}
      contentComponent={HTMLContent}
      descripcion={post.frontmatter.descripcion}
      titulo={post.frontmatter.titulo}
      imagen={post.frontmatter.imagen}
      codigo={post.frontmatter.codigo}
    />
  );
};

BrandProducts.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BrandProducts;

export const pageQuery = graphql`
  query BrandProductsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        titulo
      }
    }
  }
`;
