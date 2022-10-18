import { NavLink } from 'react-router-dom';
import css from '../Auth/AuthNav.module.css'
const checkActive = ({isActive}) => {
  return isActive ? {color:'brown'} : {color:'green'}
}
export const AuthNav = () => {
  return (
    <div className={css.auth}>
      <NavLink to="/register" className={css.link} style={checkActive}>
        Register
      </NavLink>
      <NavLink  to="/login" className={css.link} style={checkActive}>
        Log In
      </NavLink>
    </div>
  );
};