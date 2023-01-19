// import axios from "axios";
import React, {useEffect, useState} from "react";

import {User} from "../User/User";
import {userService} from "../../Servicer/userService";


const Users = () => {
    const [users, setUsers] = useState([])
    const [useDetails, setUseDetails]=useState(null)
    useEffect(() => {


        userService.getAll()
            .then(value => value.data)
            .then(data => setUsers([...data]))
    },[])
return (
    <div>
        <h2>UseDetails:</h2>
        {useDetails && <User user={useDetails}/> }
        <hr/>
           <h2>Users:</h2>
        {users.map( user => <User Key={user.id} user={user} setUseDetails={setUseDetails} />)}
  </div>
);
};

export {Users};