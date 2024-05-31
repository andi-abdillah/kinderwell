import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import WelcomePage from "./pages/WelcomePage";
import HealthLayout from "./pages/health/HealthLayout";
import HealthItems from "./pages/health/HealthItems";
import HealthDetailPage from "./pages/health/HealthDetailPage";
import FeelingsLayout from "./pages/feelings/FeelingsLayout";
import FeelingsItems from "./pages/feelings/FeelingsItems";
import FeelingsDetailPage from "./pages/feelings/FeelingsDetailPage";
import IllnessLayout from "./pages/illness/IllnessLayout";
import IllnessItems from "./pages/illness/IllnessItems";
import IllnessDetailPage from "./pages/illness/IllnessDetailPage";

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
          <Route path="illness" element={<IllnessLayout />}>
            <Route index element={<IllnessItems />} />
            <Route path=":slug" element={<IllnessDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
