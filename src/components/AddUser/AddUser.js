import classes from '../AddUser/AddUser.module.css'
import { useState } from 'react';
import Card from '../Card/Card'
import Button from '../Button/Button'
const basic_val = {
  'name': '',
  'year': '',
}


function AddUser(props) {
  const [Name, setName]= useState('');
  const [Age, setAge]= useState('');

  
  // const [val, setVal]= useState(basic_val)


  // const change = (input, value) => {
  //   setVal((pval)=>{
  //     return{
  //       ...pval,
  //       [input]: +value
  //     }
  //   })
  //   console.log(val);
  // }


  const changeName = (e)=>{
    setName(e.target.value);
  }
  const changeAge = (e)=>{
    setAge(e.target.value);
  }

  const submit = (e)=>{
    e.preventDefault();
    if(Name.trim().length === 0 || Age.trim().length === 0){
      return;
    }
    if(+Age < 1){
      return;
    }
    props.onUpdate(Name,Age);
    setName('');
    setAge('');
  }


  return (
    <Card className={classes.input}>
      <form onSubmit={submit}>
        <label htmlFor='username' className={classes['label']}>Username</label>
        {/* <input onChange={(e)=> change('name', e.target.value)} type='text' id='name' value={val['name']}/> */}
        <input onChange={changeName} type='text' id='name'/>
        <label htmlFor='year'>Age (years)</label>
        {/* <input onChange={(e)=> change('year', e.target.value)} type='number' id='year' value={val['year']}/> */}
        <input onChange={changeAge}  type='number' id='year'/>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;

