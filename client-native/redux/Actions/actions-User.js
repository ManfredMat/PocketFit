//ACTIONS NAMES
export const USER_SIGN_IN = "USER_SIGN_IN";
  
  export default function signUp (usuario) {
    return {
      type: USER_SIGN_IN,
      payload: usuario
    };
  }