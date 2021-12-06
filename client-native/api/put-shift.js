import axios  from 'axios'
import IP from '../components/Ips'
export const shiftRecord = async (datos) => {
    return await axios({
        method: "put",
        url: `http://${IP}:3001/api/shift/update`,
        data: datos,
        withCredentials: true
    });
};
