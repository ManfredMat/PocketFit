import axios from "axios";
import IP from "../components/Ips";

export default getUserId = async (id) => {
    console.log(id, "ID")
  return await axios({
    method: "get",
    url: `http://${IP}:3001/api/users/${id}`
  });
};