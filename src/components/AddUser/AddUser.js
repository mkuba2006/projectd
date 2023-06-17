import classes from '../AddUser/AddUser.module.css'
import { useState } from 'react';
import Card from '../Card/Card'
import Button from '../Button/Button'
const basic_val = {
  'name': '',
  'year': '',
}


function AddUser(props) {
  const [val, setVal]= useState(basic_val)


  const change = (input, value) => {
    setVal((pval)=>{
      return{
        ...pval,
        [input]: +value
      }
    })
    console.log(val);
  }
  
  const submit = (e)=>{
    e.preventDefault();
  }


  return (
    <Card className={classes.input}>
      <form onSubmit={submit}>
        <label htmlFor='username' className={classes['label']}>Username</label>
        <input onChange={(e)=> change('name', e.target.value)} type='text' id='name' value={val['name']}/>
        <label htmlFor='year'>Age (years)</label>
        <input onChange={(e)=> change('year', e.target.value)} type='number' id='year' value={val['year']}/>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;

