import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from '../Login/Login.module.css'

export const LoginUser = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    };
  
    return (
      <div className={css.box}>
      <form  onSubmit={handleSubmit} autoComplete="off" className={css.form}>
        <p className={css.text}>Authorization</p>
        <label className={css.label}>
          Email
          <input type="email" name="email" className={css.input}/>
        </label>
        <label  className={css.label}>
          Password
          <input type="password" name="password"  className={css.input}/>
        </label>
        <button type="submit" className={css.button}>Log In</button>
      </form>
      </div>
    );
  };
  