import {
    PRUEBA
  } from "../actions/actions-names";
  
  export function prueba(prueba) {
    return {
      type: PRUEBA,
      value: prueba,
    };
  }