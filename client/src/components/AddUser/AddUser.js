import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/actiontypes';
import './AddUser.css'
import {Modal,Button} from 'react-bootstrap'
const AddUser=() => {
  
    const {show, setShow} = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [fullName,setfullName] = useState('')
    const [email,setEmail] = useState('')
    const [age,setAge] = useState('')
    const dispatch = useDispatch()
    
    const add = () => {
              dispatch(addUser(fullName,email,age));
              dispatch(getUser())
              handleClose()
    }
  return (
       <div className="">
             <Button variant ="primary" onclick={handleShow}>
               Add
             </Button>
             <Modal show={show} onHide={handleShow}>
               <Modal.Header closeButton>
                 <Modal.Title>add user</Modal.Title>
               </Modal.Header>
               <Modal.body>.
                 <form onSubmit={(e) => e.preventDefault()} >
                   <input type="text" 
                   className="form-control" 
                   onchange={(e) =>setFullName(e.target.value)} 
                   value={fullName} />
                   <input type="text" 
                   className="form-control" 
                   onchange={(e) =>setEmail(e.target.value)} 
                   value={email} />
                   <input type="text" 
                   className="form-control" 
                   onchange={(e) =>setAge(e.target.value)} 
                   value={age} /> 
                 </form>
               </Modal.body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type = "submit" onClick={add}>
                    Save Changes
                  </Button>
               </Modal.Footer>
             </Modal>
       </div>
  )
}
 
export default AddUser;
