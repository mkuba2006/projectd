import React from "react";
import classes from './List.module.css';
import Card from '../Card/Card'


const UserList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export default UserList;