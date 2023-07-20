import { Navigate } from "react-router-dom";

const Productedroute = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth") || false);
  return isAuth ? children : <Navigate to="/" />;
};

export default Productedroute;
