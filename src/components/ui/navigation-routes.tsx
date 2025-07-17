import { MainRoutes } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface NavigationRoutesProps {
  isMobile?: boolean;
}

export const NavigationRoutes = ({
  isMobile = false,
}: NavigationRoutesProps) => {
  return (
    <ul
      className={cn(
        "flex items-center gap-6",
        isMobile && "items-start flex-col gap-8"
      )}
    >
      {MainRoutes.map((route) => (
        <div key={route.href}>
          {route.label === "Contact Us" ? (
            <a
              href="https://linktr.ee/urstrulyprateek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-300 px-4 py-2 rounded-full transition-all duration-200 hover:bg-white hover:text-black"
            >
              {route.label}
            </a>
          ) : (
            <NavLink
              to={route.href}
              className={({ isActive }) =>
                cn(
                  "relative text-base text-gray-300 px-4 py-2 rounded-full transition-all duration-200 hover:bg-white hover:text-black",
                  isActive && "font-semibold bg-white text-black animate-pulse shadow-2xl shadow-purple-600/80"
                )
              }
              style={({ isActive }) => isActive ? {
                animationDuration: '3s',
                animationTimingFunction: 'ease-in-out'
              } : {}}
            >
              {route.label}
            </NavLink>
          )}
        </div>
      ))}
    </ul>
  );
};