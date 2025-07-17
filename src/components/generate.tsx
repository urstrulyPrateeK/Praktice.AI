import { Outlet } from "react-router-dom";

export const Generate = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex-col md:px-12">
        <Outlet />
      </div>
    </div>
  );
};