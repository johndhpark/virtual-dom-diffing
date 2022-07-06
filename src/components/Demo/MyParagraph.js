import PropTypes from "prop-types";

const MyParagraph = ({ children }) => <div>{children}</div>;

MyParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyParagraph;
