import PropTypes from "prop-types";
import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOut = ({ show }) => (
  <MyParagraph>{show ? "This is new!" : ""}</MyParagraph>
);

DemoOut.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default React.memo(DemoOut);
