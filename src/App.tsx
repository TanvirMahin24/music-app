import { useKeycloak } from "@react-keycloak/web";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingComponent from "./components/shared/LoadingComponent/LoadingComponent";
import PrivateOutlet from "./utils/PrivateOutlet";
import FavoritesPage from "./views/FavoritesPage/FavoritesPage";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";

function App() {
  const { initialized } = useKeycloak();

  if (!initialized) {
    return <LoadingComponent />;
  }

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/*" element={<PrivateOutlet />}>
        <>
          <Route path="home" element={<LandingPage />} />
          <Route path="dashboard" element={<LandingPage />} />
          <Route path="favourites" element={<FavoritesPage />} />
        </>
      </Route>
      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
}

export default App;
