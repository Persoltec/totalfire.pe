import React from "react";
import { findDOMNode } from "react-dom";
import { StaticQuery, graphql } from "gatsby";
import { Icon } from "react-icons-kit";
import { ic_mail } from "react-icons-kit/md/ic_mail";
import Img from "gatsby-image";

class Portada extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { ...props } = this.props;
  

    return (
      <React.Fragment>
        
            <StaticQuery
              query={graphql`
                query {
                  allFile(filter: { name: { eq: "portada" } }) {
                    edges {
                      node {
                        childImageSharp {
                          fluid(quality: 80, toFormat: JPG) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
                }
              `}
              render={data => (
                <React.Fragment>
                  {data.allFile.edges.map((items, i) => {
                    return (
                      <React.Fragment>
                        <Img className="portada" fluid={items.node.childImageSharp.fluid} />
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              )}
            />

      </React.Fragment>
    );
  }
}

export default Portada;
