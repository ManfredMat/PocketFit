import axios from "axios";
import IP from "../components/Ips";

export default postLoginUser = async (datos) => {
  return await axios({
    method: "post",
    url: `http://${IP}:3001/api/login`,
    data: datos,
    withCredentials: true
  });
};