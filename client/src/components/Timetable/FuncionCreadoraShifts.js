const intervalo = ["7-9", "9-11", "11-13", "14-16", "16-18", "18-20"]; //esto viene de timetable

const capacity = 10; //esto viene de timetable

const WeekDaysGenerator = (
    firstDay,
    firstDayMonth,
    firstDayMonthDays,
    lastDay,
    lastDayMonth
  ) => {
    if (firstDayMonth === lastDayMonth) {
      return {
        monthNum: [firstDayMonth, undefined],
        daysNums: Array.from(
          { length: (lastDay - firstDay) / 1 + 1 },
          (_, i) => firstDay + i * 1
        ),
      };
    } else if (firstDayMonth !== lastDayMonth) {
      let LastsFirstMonth = Array.from(
        { length: (firstDayMonthDays - firstDay) / 1 + 1 },
        (_, i) => firstDay + i * 1
      );
      let FirstsLastMonth = Array.from(
        { length: (lastDay - 1) / 1 + 1 },
        (_, i) => 1 + i * 1
      );
      return {
          monthNum: [firstDayMonth, lastDayMonth],
          daysNums: LastsFirstMonth.concat(FirstsLastMonth)
      }
    }
  };

const createWeekShifts = (body) => {
  const {
    weekDaysNames,
    firstDay,
    firstDayMonth,
    firstDayMonthDays,
    lastDay,
    lastDayMonth,
    week,
    year,
  } = body;

  const array = [];
  const WeekDays = WeekDaysGenerator(
    firstDay,
    firstDayMonth,
    firstDayMonthDays,
    lastDay,
    lastDayMonth,
  );

  for (let i = 0; i < weekDaysNames.length; i++) {
    for (let j = 0; j < intervalo.length; j++) {
      array.push({
        availability: capacity,
        capacity: capacity,
        beginning: intervalo[j].split("-")[0],
        ending: intervalo[j].split("-")[1],
        weekday: weekDaysNames[i],
        day: WeekDays.daysNums[i],
        month:
          WeekDays.monthNum[1] === undefined
            ? WeekDays.monthNum[0]
            : WeekDays.daysNums[i] > WeekDays.daysNums[i + 1]
            ? WeekDays.monthNum[0]
            : WeekDays.monthNum[1],
        year: year,
        week: week,
      });
    }
  }
  return array
};

const bodySimple = {firstDay: 22,firstDayMonth:11,firstDayMonthDays:30, lastDay: 28, lastDayMonth: 11,week:47,year:2021,weekDaysNames:[
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
] }
const bodyHard = {firstDay: 29,firstDayMonth:11,firstDayMonthDays:30, lastDay: 5, lastDayMonth: 12,week:48,year:2021, weekDaysNames:[
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
]}
console.log(createWeekShifts(bodySimple))
console.log(createWeekShifts(bodyHard))
