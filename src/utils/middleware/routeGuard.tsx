import { Route, Routes } from "react-router-dom";
import { routesPrivateConfig, routesPublicConfig } from "../../../router";
import { PublicRoutes } from "../routesConfig/publicRoutes";
import { PrivateRoutes } from "../routesConfig/privateRoutes";
import { NotFoundPage } from "@/pages/notFoundPage/NotFoundPage";

export const RouteGuard = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicRoutes />}>
        {routesPublicConfig.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>

      {/* Private Routes with Protection by Role */}
      {routesPrivateConfig.map((route) => (
        <Route key={route.id} path={route.path} element={<PrivateRoutes />}>
          <Route
            key={route.id}
            path={route.path}
            element={<route.component />}
          />
        </Route>
      ))}

      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
