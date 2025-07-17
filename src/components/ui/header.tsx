import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";

const Header = () => {
  const { userId } = useAuth();

  return (
    <div className="w-full p-4 md:p-6 lg:p-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <header
          className={cn("w-full bg-black/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-xl duration-150 transition-all ease-in-out")}
        >
          <Container>
            <div className="flex items-center gap-4 w-full py-4">
              {/* logo section */}
              <LogoContainer />

              {/* navigation section */}
              <nav className="hidden md:flex items-center gap-3">
                <NavigationRoutes />
                {userId && (
                  <NavLink
                    to={"/generate"}
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
                    Virtual Interview Room
                  </NavLink>
                )}
              </nav>

              <div className="ml-auto flex items-center gap-6">
                {/* profile section */}
                <ProfileContainer />

                {/* mobile toggle section */}
                <ToggleContainer />
              </div>
            </div>
          </Container>
        </header>
      </div>
    </div>
  );
};

export default Header;