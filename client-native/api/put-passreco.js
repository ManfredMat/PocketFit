import axios from "axios";
import IP from "../components/Ips";

export default changeUserPassword = async (datos) => {
    return await axios({
        method: "put",
        url: `http://${IP.IP}:3001/api/resetpassword/reset_password`,
        data: datos,
        withCredentials: true
    });
};
