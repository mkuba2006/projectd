import AddUser from './components/AddUser/AddUser'
import UserList from './components/UserList/UserList';
import React, { useState } from 'react';
function App() {
  const [list, uplist] = useState([]);

  const update = (UName, UAge) =>{
    uplist((pval)=>{
      return[...pval,{name: UName, age: UAge, id: Math.random().toString()} ]
    });
    console.log(list);
  };

  return (
    <div>
      <AddUser onUpdate={update}/>
      <UserList  users={list}/>
    </div>
  );
}

export default App;
