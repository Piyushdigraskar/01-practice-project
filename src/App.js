import React from 'react';
import { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const [UserList, setUserList] = useState([]);

  const onAddUserHandler = (uName, uAge, uCollege)=>{
    setUserList((prevUsersList)=>{
      return [...prevUsersList, {name:uName, age:uAge,college:uCollege, id:Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler}/>
      <UsersList users={UserList}></UsersList>
    </div>
  );
}

export default App;
