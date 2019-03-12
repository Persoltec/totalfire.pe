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
    const { ...props } = this.props;
    const { title,subtitle,content } = props;
    delete props.title;
    delete props.subtitle;
    delete props.content;

    let PriTitle=  String(title).split(" ")[0].toString();
    let SeTitle=  String(title).split(" ").slice(1).join(" ").toString();
    //alert(JSON.stringify(SeTitle, null, 4))
    return (
   <div className="widget-title">

         {subtitle && (
      <h2 className="subtitle is-size-6-desktop is-size-7-touch"> {subtitle}</h2>
)}    
{title && (
  <React.Fragment>
      <h1 className="title is-size-3-desktop is-size-4-touch is-spaced ">{PriTitle} <span class="has-text-primary">{SeTitle}</span></h1>
  
      <img className="title-separator" src={TitleSeparator} alt="separador total fire"/>
      </React.Fragment>
)}
{content && (
      <p>{content}</p>
)}
    </div>

    );
  }
}

export default Title;
