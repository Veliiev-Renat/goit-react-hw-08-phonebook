import style from '../Filter/Filter.module.css'
import { filterContacts } from 'redux/contacts/counterSlice';
import { useDispatch } from 'react-redux'
export default function Filter(){

    const dispatch = useDispatch()

    const handleChangeFilter = (e) =>{
        dispatch(filterContacts(e.target.value))
        }

        return(
        <form  className={style.form} onSubmit={(e)=>{e.preventDefault()}}>
        <p className={style.text}>Contacts</p>
        <label className={style.label}>
            Find contact by name
            <input type="text" onChange={handleChangeFilter} className={style.input} name="filter"/>
        </label>
    </form>
    )   
}