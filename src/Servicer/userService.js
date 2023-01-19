import {axiosService} from "./axiosService";

const userService = {
    getAll:()=>axiosService.get('/posts'),
    getById:(id)=>axiosService.get(`/users/${id}`)
}

export {userService};