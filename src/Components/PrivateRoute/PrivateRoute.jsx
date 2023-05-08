import { Route/* , Redirect */ } from "react-router-dom";
import jwt_decode from "jwt-decode";
//import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  const user = token ? jwt_decode(token) : null;
  const isAdmin = user ? user.isAdmin : false;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
