import axios from "axios";
import IP from "../components/Ips";

export default sendMailPassReco = async (datos) => {
    return await axios({
        method: "post",
        url: `http://${IP}:3001/api/resetpassword/forgotten_password`,
        data: datos,
        withCredentials: true
    });
};
