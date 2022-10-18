import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import css from '../UserMenu/UserMenu.module.css'


export const UserMenu = () => {
const dispatch = useDispatch();
const user = useSelector(selectUser)

  return (
    <div className={css.box}>
      <p className={css.text}>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logOut())} className={css.button}>
      Logout
      </button>
    </div>
  );
};
