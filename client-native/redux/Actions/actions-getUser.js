import IP from '../../components/Ips'
import axios from 'axios';
export const GET_USER = "GET_USER";

export default function getUser(usuario) {
    return {
        type: GET_USER,
        payload: usuario
    };
}

export const PutUser = (id, data) => async () =>{
    try {
       await axios.put(`http://${IP}:3001/api/users/${id}`, data)
    } catch (error) {
        console.log(error)
    }
}