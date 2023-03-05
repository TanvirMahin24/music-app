import { Route, Routes } from "react-router-dom";
import ComingSoonPage from "./views/ComingSoonPage/ComingSoonPage";
import LandingPage from "./views/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<ComingSoonPage />} />
        <Route path="/" element={<LandingPage />} />

        <Route path="/*" element={<PrivateOutlet />}>
          <>
            <Route path="dashboard" element={<LandingPage />} />
          </>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
