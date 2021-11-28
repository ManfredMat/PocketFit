import axios from "axios";

// IPv4
// Cande = 192.168.1.8
// Luciano = 192.168.0.26


export default postLoginUser = async (datos) => {
  return await axios({
    method: "post",
    url: "http://192.168.0.26:3001/api/login",
    data: datos,
  });
};