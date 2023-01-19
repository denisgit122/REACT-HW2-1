import {axiosService} from "./axiosService";

const userService = {
    getAll:()=>axiosService.get('/posts'),
    getById:()=>axiosService.get(`.users/%{id}`)
}

export {userService};