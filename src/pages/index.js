import * as React from "react";
import Forecast from "../components/Forecast";
import Layout from "../components/Layout";
import "../css/index.css";
import Seo from "../components/Seo";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <script type="text/javascript">
          {`function onLoad() {
              cntrUpTag.track("cntrData", "7490abf38e56e9f8");
          }`}
        </script>
        <script
          src="https://cdn01.basis.net/assets/up.js"
          onload="onLoad()"
        ></script>
      </Helmet>
      <Layout>
        <Seo title="Home" />
        <Forecast />
      </Layout>
    </>
  );
};

export default IndexPage;
