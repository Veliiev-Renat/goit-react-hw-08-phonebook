import { Routes , Route} from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { RestrictedRoute } from "./RestrictedRout";
import { PrivateRoute } from "./PrivateRoute";
import { lazy } from "react";

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App(){
    return(<>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" children={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" children={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" children={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
      </> 
      )
}
