import axios from "axios";

// IPv4
// Cande = 192.168.1.8
// Luciano = 192.168.0.26


const postUser = async (datos) => {
  return await axios({
    method: "post",
    url: "http://192.168.0.26:3001/api/users/register_user",
    data: datos,
  });
};

export default postUser;