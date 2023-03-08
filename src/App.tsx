import { useKeycloak } from "@react-keycloak/web";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingComponent from "./components/shared/LoadingComponent/LoadingComponent";
import PrivateOutlet from "./utils/PrivateOutlet";
import FavoritesPage from "./views/FavoritesPage/FavoritesPage";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import PlaylistPage from "./views/PlaylistPage/PlaylistPage";
import SearchPage from "./views/SearchPage/SearchPage";
import "@stripe/stripe-js";
import PaymentSuccessPage from "./views/PaymentSuccessPage/PaymentSuccessPage";
import PaymentFailPage from "./views/PaymentFailPage/PaymentFailPage";

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
          <Route path="success" element={<PaymentSuccessPage />} />
          <Route path="success" element={<PaymentFailPage />} />
          <Route path="favourites" element={<FavoritesPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="playlists" element={<PlaylistPage />} />
        </>
      </Route>
      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
}

export default App;
