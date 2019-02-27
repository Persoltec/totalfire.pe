import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ServiceMenu from "../../widgets/ServiceMenu/ServiceMenu.jsx";

import Img from "gatsby-image";

class Sidebar extends React.Component {
  render() {
    const { ...props } = this.props;

    return (
      <div className="layout-sidebar">
        <ServiceMenu />
      </div>
    );
  }
}

export default Sidebar;
