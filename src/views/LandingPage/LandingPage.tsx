import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";

const LandingPage = () => {
  const { keycloak, initialized } = useKeycloak();
  useEffect(() => {
    if (
      initialized &&
      !keycloak.authenticated &&
      typeof window !== "undefined"
    ) {
      console.log("first");
      window.location.replace(
        "http://localhost:8080/realms/test/protocol/openid-connect/auth?client_id=music-app&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state=5e857d77-ced2-4c9e-8336-cea3c193c476&response_mode=fragment&response_type=code&scope=openid&nonce=244179a5-1f84-41b0-8242-62f66db4cfc6"
      );
    }
  }, [initialized]);
  return <div>{initialized ? "LandingPage" : "loading"}</div>;
};

export default LandingPage;
