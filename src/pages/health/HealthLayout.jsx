import { Outlet } from "react-router-dom";

export default function HealthLayout() {
  return (
    <div className="min-h-screen px-8 py-12 bg-secondary">
      <Outlet />
    </div>
  );
}
