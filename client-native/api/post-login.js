import axios from "axios";

const postUser = async (datos) => {
  return await axios({
    method: "post",
    url: "http://192.168.1.8:3001/api/users/register_user",
    data: datos,
  });
};

export default postUser;