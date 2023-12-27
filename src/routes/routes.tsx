import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import useUserLogged from "../hooks/userUserLogged";
import Authentication from "../pages/Authentication";
import Application from "../pages/Application";

const defaultRouteNotResolved = (
  <Route path="*" element={<p className="text-black">Path not resolved</p>} />
);

const ContentIfUserIsLogged = () => {
  return (
    <Routes>
      {defaultRouteNotResolved}
      <Route
        path="/"
        element={
          <Navigate to={`${import.meta.env.VITE_APP_BASE_URL}application`} />
        }
      />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/application" element={<Application />} />
    </Routes>
  );
};

function RouterComponent() {
  const [userIsLogged] = useUserLogged();
  console.log(userIsLogged);

  return (
    <Router basename={import.meta.env.VITE_APP_BASE_URL as string}>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to={`${import.meta.env.VITE_APP_BASE_URL}application`} />
          }
        />
        <Route
          path={`${import.meta.env.VITE_APP_BASE_URL}authentication`}
          element={
            !userIsLogged ? (
              <Authentication />
            ) : (
              <Navigate
                to={`${import.meta.env.VITE_APP_BASE_URL}application`}
              />
            )
          }
        />
        <Route
          path={"/*"}
          element={
            !userIsLogged ? (
              <Navigate
                to={`${import.meta.env.VITE_APP_BASE_URL}authentication`}
              />
            ) : (
              <ContentIfUserIsLogged />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default RouterComponent;
