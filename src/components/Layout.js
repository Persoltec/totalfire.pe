import React from "react";
import Helmet from "react-helmet";
// import { StaticQuery, graphql } from "gatsby"

import { enquireScreen } from "enquire-js";

import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import BackToTop from "./layout/BackToTop/BackToTop";
import { StickyContainer, Sticky } from 'react-sticky';
import "typeface-roboto";
import "typeface-oswald";

import "../style.scss";

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const children = this.props.children;
    const full = this.props.full;
    const titulo = this.props.titulo;

    return (
       <StickyContainer className="">


<svg class="gradient" 
                               style={{
position: "absolute",
    transform: "translateX(-100%)"
}}
                              
>
 <defs >
    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="20px" gradientUnits="userSpaceOnUse" >
      <stop stop-color="#ffa848" offset="0%"/>
      <stop stop-color="#ff5f2c" offset="100%"/> 
    </linearGradient>
  </defs>
 
</svg>


      <div id="pagina">
        <Helmet
          script={[
            { src: "https://smtpjs.com/v3/smtp.js", type: "text/javascript" }
          ]}
        />
        <Header titulo={titulo} />

        {full ? (
          <div id="contenido">{children}</div>
        ) : (
          <section class="section">
            <div class="container">
              <div className="columns is-variable bd-klmn-columns is-6 invert">
                <div className="column is-3">
                  <Sidebar />
                </div>
                <div className="column is-9">{children}</div>
              </div>
            </div>
          </section>
        )}

        <Footer />

        <BackToTop />
      </div>
         </StickyContainer>
    );
  }
}

export default Layout;
