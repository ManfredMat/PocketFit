import axios from "axios";

// IPv4
// Cande = 192.168.1.8
// Luciano = 192.168.0.26
// l3an= .1.109

export default postLoginUser = async (datos) => {
  return await axios({
    method: "post",
    url: "http://192.168.1.109:3001/api/login",
    data: datos,
    withCredentials: true
  });
};