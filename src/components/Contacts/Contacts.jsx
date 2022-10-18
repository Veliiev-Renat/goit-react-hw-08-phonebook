import style from '../Contacts/Contacts.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts,deleteContact } from 'redux/contacts/operations'
import { selectContacts } from 'redux/contacts/selectors'
import { selectToken} from 'redux/auth/selectors'



export default function Contact({click}){
const dispatch = useDispatch()
const contacts = useSelector(selectContacts);
const token = useSelector(selectToken)

useEffect(()=>{
    token &&  dispatch(fetchContacts())
},[dispatch,token])



const filter = useSelector(state=>state.contact.filter)
const filteredArray=filter?contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase())):contacts

        return(
    <ul className={style.list}>
        {filteredArray.map((contact)=>(
        <li key={contact.id} className={style.item}>
           <p className={style.text}>{contact.name} : {contact.number}</p> 
           <div className={style.box}>
           <button type="button" onClick={()=>{dispatch(deleteContact(contact.id))}}  className={style.button}>delete </button>
           <button type="button" onClick={click}
             className={style.button} id={contact.id}>Up Date</button>
             </div>
        </li>
        ))}    
    </ul>
   )     
}


