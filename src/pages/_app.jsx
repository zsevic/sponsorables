import PropTypes from "prop-types";
import React from "react";
import ReactGA from "react-ga4";
import "bootstrap/dist/css/bootstrap.min.css";
import { ANALYTICS_TRACKING_ID } from "constants/config";

if (process.env.NODE_ENV !== "development") {
  ReactGA.initialize(ANALYTICS_TRACKING_ID);
}

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
