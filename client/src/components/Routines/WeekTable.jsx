import axios from "axios";
import { useState } from "react";
import Day from "./Day";

const WeekTable = () => {

    const [weekIds, setWeekIds] = useState({
        monday:'',
        tuesday: '',
        wendsday: '',
        thursday: '',
        friday: '',
        saturday: ''    
    })

    const saveChanges = async () => {

        console.log(weekIds)

        // const response = await axios.post("unaUrl", weekIds);
        // console.log(response);

    }

    const validateWeekIds = () => {
        return (weekIds.monday.length === 0 || weekIds.tuesday.length === 0 || weekIds.wendsday.length === 0 || weekIds.thursday.length === 0 || weekIds.friday.length === 0 || weekIds.saturday.length === 0);
    }

    return (
        <>
            <h1>Plan Semanal</h1>
            <div style={{display:'flex'}}>
                <Day day="Lunes" api="monday" setWeekIds={setWeekIds} weekIds={weekIds}></Day>
                <Day day="Martes" api="tuesday" setWeekIds={setWeekIds} weekIds={weekIds}></Day>
                <Day day="Miércoles" api="wendsday" setWeekIds={setWeekIds} weekIds={weekIds}></Day>
                <Day day="Jueves" api="thursday" setWeekIds={setWeekIds} weekIds={weekIds}></Day>
                <Day day="Viernes" api="friday" setWeekIds={setWeekIds} weekIds={weekIds}></Day>
                <Day day="Sábado" api="saturday" setWeekIds={setWeekIds} weekIds={weekIds}></Day>
            </div>
            <button disabled={validateWeekIds()} onClick={saveChanges}>Guardar Cambios</button>

           
        </>
    )

}

export default WeekTable;