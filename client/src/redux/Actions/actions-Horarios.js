import axios from "axios";

//ACTIONS NAMES
export const GET_LESSONS = "GET_LESSONS";

export function getLessons() {
  return async function (dispatch) {
    await axios
      .get("http://localhost:3001/api/events/all")
      .then((res) => {
        //console.log(res.data)
        dispatch({
          type: GET_LESSONS,
          value: res.data,
        });
      });
  };
}
