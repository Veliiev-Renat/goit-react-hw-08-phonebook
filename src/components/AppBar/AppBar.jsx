import { UserMenu } from '../UserMenu/UserMenu';
import {AuthNav} from '../Auth/AuthNav'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from '../AppBar/AppBar.module.css'


const checkActive = ({isActive}) => {
  return isActive ? {color:'brown'} : {color:'green'}
}

export const AppBar = () => {
  const  isLoggedIn  = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
       <nav className={css.nav}>  
      <NavLink  to="/" style={checkActive } className={css.link} end >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink  to="/contacts" className={css.link} style={checkActive}>
          Contacts
        </NavLink>
      )}
    </nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};