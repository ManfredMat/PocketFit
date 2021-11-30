//ACTIONS NAMES
export const PLANTILLA = "PLANTILLA";

import axios from 'axios'
  
  export function prueba (prueba) {
    return {
      type: PLANTILLA,
      value: prueba,
    };
  }
