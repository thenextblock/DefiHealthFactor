import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";
import Layout from "./Layout";
import Home from "./Home";


const useAuth = () => {
  const context = useContext(Context);
  const auth = context.globalstate.isLoggedIn;
  return auth;
};

const ProtectedRoute = ({ children }: { children: any }) => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

function RoutingComponent() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default RoutingComponent;
