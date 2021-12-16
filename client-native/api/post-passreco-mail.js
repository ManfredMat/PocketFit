import axios from "axios";
import IP from "../components/Ips";

export default sendMailPassReco = async (datos) => {
    return await axios({
        method: "post",
        url: `https://pocketfithenry.herokuapp.com/api/resetpassword/forgotten_password`,
        data: datos,
        withCredentials: true
    });
};
