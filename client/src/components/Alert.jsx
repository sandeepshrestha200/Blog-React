import PropTypes from "prop-types";
import "./assets/css/alert.css";

const Alert = (props) => {
  return <div>{props.alert && <div className={`alert ${props.alert.type}`}>{props.alert.msg}</div>}</div>;
};

export default Alert;

Alert.propTypes = {
  alert: PropTypes.object,
};
