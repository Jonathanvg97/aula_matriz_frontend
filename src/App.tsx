import { BrowserRouter } from "react-router-dom";
import { RouteGuard } from "./utils/middleware/routeGuard";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App ">
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "!bg-primary !text-white",
        }}
      />
      <BrowserRouter>
        <RouteGuard />
      </BrowserRouter>
    </div>
  );
}

export default App;
