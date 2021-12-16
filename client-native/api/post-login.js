import axios from "axios";
import IP from "../components/Ips";

export default postLoginUser = async (datos) => {
  return await axios({
    method: "post",
    url: `https://pocketfithenry.herokuapp.com/api/login`,
    data: datos,
    withCredentials: true
  });
};