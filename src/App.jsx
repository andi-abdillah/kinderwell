import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import WelcomePage from "./pages/WelcomePage";
import HealthLayout from "./pages/health/HealthLayout";
import HealthItems from "./pages/health/HealthItems";
import HealthDetailPage from "./pages/health/HealthDetailPage";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="health" element={<HealthLayout />}>
            <Route index element={<HealthItems />} />
            <Route path=":slug" element={<HealthDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
