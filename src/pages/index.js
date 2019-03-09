import React from "react";
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout";
import BrandProducts from "../components/widgets/BrandProducts/BrandProducts";
import EnterpriseFeature from "../components/widgets/EnterpriseFeature/EnterpriseFeature";

import ServiceList from "../components/widgets/ServiceList/ServiceList";
import AdBar from "../components/widgets/AdBar/AdBar";

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Layout full>
        <ServiceList />
        <EnterpriseFeature />
        <BrandProducts Titulo="Marcas líderes" />
        <AdBar title="Tu vida y empresa están en riesgo. No juegues con fuego." buttom="Contactános" url="fgdfgdfgdf" />
      </Layout>
    );
  }
}
