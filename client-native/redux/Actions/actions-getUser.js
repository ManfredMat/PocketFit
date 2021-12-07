export const GET_USER = "GET_USER";

export default function getUser(usuario) {
    return {
        type: GET_USER,
        payload: usuario
    };
}