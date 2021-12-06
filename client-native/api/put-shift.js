import axios  from 'axios'

export const shiftRecord = async (datos) => {
    return await axios({
        method: "put",
        url: `http://192.168.1.109:3001/api/shift/update`,
        data: datos,
        withCredentials: true
    });
};
