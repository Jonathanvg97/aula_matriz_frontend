import type { ComponentType } from "react";

export interface RouteConfigInterface {
  id: string;
  path: string;
  component: ComponentType; // acepta FC o class components
  exact?: boolean; 
  private: boolean;
}

