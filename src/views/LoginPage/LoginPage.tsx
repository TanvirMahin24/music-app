import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from "react-router-dom";
import LoadingComponent from "../../components/shared/LoadingComponent/LoadingComponent";

const LoginPage = () => {
  const { keycloak } = useKeycloak();

  return keycloak.authenticated ? (
    <Navigate to="/home" />
  ) : (
    <LoadingComponent />
  );
};

export default LoginPage;
