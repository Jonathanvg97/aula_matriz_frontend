import { useState } from "react";

export const useAuth = () => {
  //Local State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  //Handlers

  return {
    isAuthenticated,
  };
};
