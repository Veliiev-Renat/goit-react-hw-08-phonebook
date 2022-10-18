import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from '../Register/Register.module.css'

export const Register =()=>{
    const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
    return(<box className={css.box}><form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    <p className={css.text}>Registration</p>
    <label className={css.label}>
      Username
      <input type="text" name="name" className={css.input}/>
    </label>
    <label className={css.label}>
      Email
      <input type="email" name="email" className={css.input}/>
    </label>
    <label className={css.label}>
      Password
      <input type="password" name="password" className={css.input}/>
    </label>
    <button type="submit" className={css.button}>Register</button>
  </form></box>)
}