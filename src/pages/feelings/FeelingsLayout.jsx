import { Outlet } from "react-router-dom";

export default function FeelingsLayout() {
  return (
    <div className="min-h-screen px-8 py-12 bg-tertiary">
      <Outlet />
    </div>
  );
}
