import { BrowserRouter } from "react-router-dom";
import { RouteGuard } from "./utils/middleware/routeGuard";
import { setupAxiosInterceptors } from "./helpers/fecthMethods/axiosInterceptor";
import { Toaster } from "./components/ui/sonner";

// Setup axios interceptor
setupAxiosInterceptors();
function App() {
  return (
    <div className="App ">
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "!bg-primary",
        }}
      />
      <BrowserRouter>
        <RouteGuard />
      </BrowserRouter>
    </div>
  );
}

export default App;
