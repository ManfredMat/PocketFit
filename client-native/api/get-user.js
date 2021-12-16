import axios from "axios";
import IP from "../components/Ips";

export default getUserId = async (id) => {
  return await axios({
    method: "get",
    url: `https://pocketfithenry.herokuapp.com/api/users/${id}`
  });
};