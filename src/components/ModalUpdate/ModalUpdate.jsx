import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import css from '../ModalUpdate/ModalUpdate.module.css'
import { useEffect } from "react";

export const Modal = ({close,Click,id}) => {
const dispatch = useDispatch();
const edit =(e)=>{
  e.preventDefault()
  const user = e.currentTarget.elements.user.value
  const contact = e.currentTarget.elements.number.value
console.log(id)
dispatch(editContact({
  contactId:id,
  upDate:{
    name:user,
    number:contact
  }
}))
close()
}
useEffect(()=>{
  const esc=(e)=>{
    if(e.code==='Escape'){
        close()
    }
   }
    window.addEventListener('keydown',esc)
    return ()=>(window.removeEventListener('keydown',esc))
},[close])

  return (
    <div onClick={Click} className={css.overlay}>
      <div  className={css.modal}>
        <form onSubmit={edit} className={css.form}>
          <p className={css.text}>EDIT CONTACT</p>
          <label className={css.label}>
            Name
            <input type="text" name='user' className={css.input}/>
          </label>
          <label className={css.label}>
            Number
            <input type="text" name='number'  className={css.input}/>
          </label>
            <button className={css.button}>Update Contact</button>
        </form>
      </div>
    </div>
  );
};