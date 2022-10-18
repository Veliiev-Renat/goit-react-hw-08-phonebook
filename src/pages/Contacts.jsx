import Contact from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";
import Form from "components/Form/Form";
import { Modal } from "components/ModalUpdate/ModalUpdate";
import { useState } from "react";


export default function Contacts() {
  const [open,setOpen] = useState(false)
  const [id,setId] = useState(null)

  const modalClose=()=>{
     setOpen(false)
  }
  const openModal=(e)=>{
        setOpen(true)
        setId(e.target.id)
     }
 const backdropClick=e=>{
 if(e.currentTarget===e.target){
      setOpen(false)
      }
    }
     
    return (
    <div style={{
    minHeight: 'calc(100vh - 50px)',
    flexDirection:'column',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
    }}>
       <Form  />
      <Filter  />
      <Contact click={openModal}/>
      {open && <Modal  close={modalClose}  Click={backdropClick} id={id}/>}
      </div>
    );
  }
