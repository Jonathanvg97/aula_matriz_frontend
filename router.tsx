import { DashBoardPage } from "@/pages/dashBoard/DashBoardPage";
import { RouteConfigInterface } from "./src/features/auth/types/routeConfig.interface";
import LoginPage from "./src/pages/LoginPage/LoginPage";

export const routesPublicConfig: RouteConfigInterface[] = [
  {
    id: "1",
    path: "/",
    component: LoginPage,
    exact: true,
    private: false,
  },
];

export const routesPrivateConfig: RouteConfigInterface[] = [
  {
    id: "2",
    path: "/dashboard",
    component: DashBoardPage,
    exact: true,
    private: true,
  },
];
