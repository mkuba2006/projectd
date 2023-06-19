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
      return{...pval,[input]: value}
    })
  }


  const submit = (e)=>{
    e.preventDefault();
    props.onUpdate(val);
  }


  return (
    <Card className={classes.input}>
      <form onSubmit={submit}>
        <label className={classes['label']}>Username</label>


        <input onChange={(e)=> change('name', e.target.value)} type='text' id='name' value={val['name']}/>
        {/* <input onChange={changeName} type='text' id='name'/> */}
        <label className={classes['label']}>Age (years)</label>
        <input onChange={(e)=> change('year', e.target.value)} type='number' id='year' value={val['year'].toString()}/>
        {/* <input onChange={changeAge}  type='number' id='year'/> */}
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;














  // const changeName = (e)=>{
  //   setName(e.target.value);
  // }
  // const changeAge = (e)=>{
  //   setAge(e.target.value);
  // }

  // const submit = (e)=>{
  //   e.preventDefault();
  //   if(Name.trim().length === 0 || Age.trim().length === 0){
  //     return;
  //   }
  //   if(+Age < 1){
  //     return;
  //   }
  //   props.onUpdate(Name,Age);
  //   setName('');
  //   setAge('');
  // }