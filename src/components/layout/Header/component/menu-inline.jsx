import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

class MenuInline extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { ...props } = this.props;
    const { titulo } = props;

    return (
    <React.Fragment>
  
        <Link to="/" className="navbar-item">
          Inicio
        </Link>

        <Link to="nosotros" className="navbar-item">
          Quiénes somos
        </Link>
        <Link to="productos" className="navbar-item">
          Productos
        </Link>
        <Link to="servicios" className="navbar-item">
          Servicios
        </Link>
         <Link to="clientes" className="navbar-item">
          Clientes
        </Link>
        <Link to="clientes" className="navbar-item">
          Blog
        </Link>

        <Link to="contactenos" className="navbar-item is-hidden-desktop">
          Contáctenos
        </Link>
      </React.Fragment>
    );
  }
}

export default MenuInline;
