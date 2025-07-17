import { Outlet } from "react-router-dom";

export const Generate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden">
          <div className="w-full min-h-screen p-6 md:p-8 lg:p-12">
            <div className="flex-col md:px-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};