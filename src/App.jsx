import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import WelcomePage from "./pages/WelcomePage";
import HealthLayout from "./pages/health/HealthLayout";
import HealthItems from "./pages/health/HealthItems";
import HealthDetailPage from "./pages/health/HealthDetailPage";
import FeelingsLayout from "./pages/feelings/FeelingsLayout";
import FeelingsItems from "./pages/feelings/FeelingsItems";
import FeelingsDetailPage from "./pages/feelings/FeelingsDetailPage";

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
          <Route path="feelings" element={<FeelingsLayout />}>
            <Route index element={<FeelingsItems />} />
            <Route path=":slug" element={<FeelingsDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
