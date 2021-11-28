const actividades = [
  { clase: "Zumba", horario: "16hs", profe: "Lucho" },
  { clase: "Bachata", horario: "15hs", profe: "Lean" },
  { clase: "GAP", horario: "18hs", profe: "Jesus" },
];

const actividadesMañana = [
  { clase: "Zumba", horario: "16hs", profe: "Lucho" },
  { clase: "Bachata", horario: "15hs", profe: "Lean" },
  { clase: "GAP", horario: "18hs", profe: "Jesus" },
];

const turnos = [
  {
    orden: 1,
    ocupado: 3,
    cupo: 10,
    franjahoraria: "14hs a 16hs",
    //personas: ["mateo", cande, lucho, lean],
  },
  {
    orden: 2,
    ocupado: 3,
    cupo: 10,
    franjahoraria: "14hs a 16hs",
    //personas: [mateo, cande, lucho, lean],
  },
  {
    orden: 3,
    ocupado: 3,
    cupo: 10,
    franjahoraria: "14hs a 16hs",
    //personas: [mateo, cande, lucho, lean],
  },
];

export default {
  actividades,
  actividadesMañana,
  turnos
};
