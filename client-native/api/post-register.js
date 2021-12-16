import axios from "axios";
import IP from "../components/Ips";

export default postRegisterUser = async (datos) => {
  return await axios({
    method: "post",
    url: `https://pocketfithenry.herokuapp.com/api/users/register_user`,
    data: datos,
  });
};