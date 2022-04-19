import * as React from "react";
import Forecast from "../components/Forecast";
import Layout from "../components/Layout";
import "../css/index.css";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Forecast />
    </Layout>
  );
};

export default IndexPage;
