import { useState } from "react";
import Day from "./Day";
import { DayName, HeaderDay, Level, Table, Week } from "./Routines.styles";
// const planSemanal = {

//     bloque1: {
//         name: "calentamiento"
//     }

// }

const WeekTable = () => {

    const [weekIds, setWeekIds] = useState({
        monday:'',
        tuesday: '',
        wendsday: '',
        thursday: '',
        friday: '',
        saturday: ''    
    })

    return (
        <>
            <h1>Plan Semanal</h1>
            <Day day="Lunes" api="monday"></Day>
            <Day day="Martes" api="tuesday"></Day>
            <Day day="Miércoles" api="wendsday"></Day>
            <Day day="Jueves" api="thursday"></Day>
            <Day day="Viernes" api="friday"></Day>
            <Day day="Sábado" api="saturday"></Day>
           
        </>
    )

}

export default WeekTable;

{/*<button>Agregar un ejercicio</button>
 <Table>
    <HeaderDay>
        <Level></Level>
        <DayName>Lunes</DayName>
        <DayName>Martes</DayName>
        <DayName>Miércoles</DayName>
        <DayName>Jueves</DayName>
        <DayName>Viernes</DayName>
        <DayName>Sábado</DayName>
    </HeaderDay>

    <Week>
        <Level>Calentamiento</Level>
        <Day>
            <ul>
                <li>Lagartijas 20</li>
                <li>Lagartijas 30</li>
                <li>Lagartijas 40</li>
                <li>Lagartijas 50</li>
            </ul>
        </Day>
        <Day>
            <ul>
                <li>Lagartijas 20</li>
                <li>Lagartijas 30</li>
                <li>Lagartijas 40</li>
                <li>Lagartijas 50</li>
            </ul>
        </Day>
        <Day>
            <ul>
                <li>Lagartijas 20</li>
                <li>Lagartijas 30</li>
                <li>Lagartijas 40</li>
                <li>Lagartijas 50</li>
            </ul>
        </Day>
        <Day>
            <ul>
                <li>Lagartijas 20</li>
                <li>Lagartijas 30</li>
                <li>Lagartijas 40</li>
                <li>Lagartijas 50</li>
            </ul>
        </Day>
        <Day>
            <ul>
                <li>Lagartijas 20</li>
                <li>Lagartijas 30</li>
                <li>Lagartijas 40</li>
                <li>Lagartijas 50</li>
            </ul>
        </Day>
        <Day>
            <ul>
                <li>Lagartijas 20</li>
                <li>Lagartijas 30</li>
                <li>Lagartijas 40</li>
                <li>Lagartijas 50</li>
            </ul>
        </Day>
    </Week>

    <Week>
        <Level>Entrenamiento</Level>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
    </Week>

    <Week>
        <Level>Estiramiento</Level>
        <Day></Day>
        <Day>
            <ul>
                <li>Lagartijas 20</li>
                <li>Lagartijas 30</li>
                <li>Lagartijas 40</li>
                <li>Lagartijas 50</li>
            </ul>
        </Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
    </Week>

</Table> */}