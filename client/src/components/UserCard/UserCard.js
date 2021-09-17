import React from 'react'
import {Card, Button} from 'react-bootstrap'
import UserCard from 'UserCard'
import './UserCard.css'
const UserCard=({ user }) => {
  const dispatch = useDispatch()
  return (
       <div className="card">
               < Card style= {{ width: '24rem'}}>
       <Card.body>
         <Card.Title className="title">FullName:{user.fullName} </Card.Title>
         <Card.text>
           <p>Email:{user.email}</p>
           <p>Age:{user.age}</p>
         </Card.text>
         <div className="d-flex justify-content-around">
           <Button variant ="primary" className="btn" onClick={ () => {dispatch(deleteUser(user._id));getUser()}}>Delete</Button>
          <EditUser user={user}/>
         </div>
       </Card.body>
       </Card>
       </div>
  );
};
 
export default UserCard
