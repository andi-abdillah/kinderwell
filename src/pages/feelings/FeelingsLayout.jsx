import { Outlet } from "react-router-dom";

export default function FeelingsLayout() {
  return (
    <div className="min-h-screen px-2 py-2 md:py-12 bg-tertiary">
      <Outlet />
    </div>
  );
}
