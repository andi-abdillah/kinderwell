import { Outlet } from "react-router-dom";

export default function IllnessLayout() {
  return (
    <div className="min-h-screen px-8 py-12 bg-secondary">
      <Outlet />
    </div>
  );
}
