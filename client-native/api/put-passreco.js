import axios from "axios";

// IPv4
// Cande = 192.168.1.8
// Luciano = 192.168.0.26
// l3an = 192.168.1.109
// M4-T30 = 192.168.0.15

export default changeUserPassword = async (datos) => {
    return await axios({
        method: "put",
        url: "http://192.168.0.26:3001/api/resetpassword/reset_password",
        data: datos,
        withCredentials: true
    });
};
