import { useKeycloak } from "@react-keycloak/web";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import LoadingComponent from "../components/shared/LoadingComponent/LoadingComponent";

const PrivateOutlet = ({}) => {
  const { keycloak, initialized } = useKeycloak();

  return !initialized ? (
    <LoadingComponent />
  ) : keycloak?.authenticated ? (
    <Outlet />
  ) : (
    <Navigate to="http://localhost:8080/realms/test/protocol/openid-connect/auth?client_id=music-app&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state=a091027b-7a20-4e2e-8454-bcc52c3122aa&response_mode=fragment&response_type=code&scope=openid&nonce=25ba20bb-9c3e-44b8-8d82-d478d80f2c1a" />
  );
};

const mapStateToProps = (state: {
  auth: { isAuthenticated: boolean | null };
}) => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(PrivateOutlet);
