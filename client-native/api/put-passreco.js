import axios from "axios";
import IP from "../components/Ips";

export default changeUserPassword = async (datos) => {
    return await axios({
        method: "put",
        url: `https://pocketfithenry.herokuapp.com/api/resetpassword/reset_password`,
        data: datos,
        withCredentials: true
    });
};
