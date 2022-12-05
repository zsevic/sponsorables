import PropTypes from "prop-types";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
