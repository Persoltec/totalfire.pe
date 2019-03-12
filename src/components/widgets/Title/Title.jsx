import React from "react";
//import Img from "gatsby-image";
//import { Link } from "gatsby";
import TitleSeparator from "../../../img/title-separator.png";


class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    // const { ...props } = this.props;
    // const { title,subtitle,content } = props;
    // delete props.title;
    // delete props.subtitle;
    // delete props.content;

    return (
   <div className="widget-title">
      <h2 className="subtitle is-6"> VENTA Y RECARGA DE EXTINTORES EN LIMA</h2>
      <h1 className="title is-3 is-spaced ">EXTINTORES <span class="has-text-primary">MULTIPROPOSITOS</span></h1>
      <img className="title-separator" src={TitleSeparator} alt="separador total fire"/>
      <p>Vendemos y recargamos extintores contra incendios, llenado con agente extintor garantizado.</p>
    </div>

    );
  }
}

export default Title;
