// import axios from "axios";
import React, {useEffect, useState} from "react";

import {User} from "../User/User";
// import {axiosService} from "../../servicer/axiosService";
import {userService} from "../../servicer/userService";

const Users = () => {
 const [users, setUsers] = useState([])
    useEffect(() => {

        userService.getAll()
            .then(value => value.data)
            .then(data => setUsers([...data]))
    },[])
return (
    <div>
        {users.map( user => <User Key={user.id} user={user} />)}
  </div>
);
};

export {Users};