import React from "react";
import { findDOMNode } from "react-dom";
import HomeSlider from "../../slider/HomeSlider";
import HeaderStyle1 from "./style-1/header.jsx";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { ...props } = this.props;
    const { titulo } = props;


    return (
      <React.Fragment>
        <HeaderStyle1 titulo={titulo}/>
      </React.Fragment>
    );
  }
}

export default Header;
