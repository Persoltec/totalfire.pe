import React from "react";
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from "gatsby"

class ContentBlock extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const children = this.props.children;

    return (
      <div className="content-wrapper">
        <div className="content">{children}</div>
      </div>
    );
  }
}

export default ContentBlock;
