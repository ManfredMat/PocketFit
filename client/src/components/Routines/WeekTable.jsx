import { Day, DayName, HeaderDay, Level, Table, Week } from "./Routines.styles";

const WeekTable = () => {

    return (
        <>
            <h1>Rutina Semanal</h1>
            <button>Agregar un ejercicio</button>
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

            </Table>
        </>
    )

}

export default WeekTable;