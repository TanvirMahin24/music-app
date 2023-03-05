import { useEffect } from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateOutlet = ({ auth }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const refFunc = async () => {
      if (auth === null || auth === false) {
        // let check = await authUserAction();
        let check = true;
        if (check === true) {
          return <Outlet />;
        } else {
          navigate("/");
        }
      }
    };
    refFunc();
  }, [auth]);
  return auth === null ? <Outlet /> : auth === true ? <Outlet /> : null;
};

const mapStateToProps = (state: {
  auth: { isAuthenticated: boolean | null };
}) => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(PrivateOutlet);
