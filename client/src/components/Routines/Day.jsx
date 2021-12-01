import { useState } from "react";
import EditDay from "./EditDay";

const Day = (props) => {

    const [renderEdit, setRender] = useState(false);


    const handleOnClick = () => {

        renderEdit
            ? setRender(false)
            : setRender(true)
    }

    return (
        <div style={{margin:'1rem'}}>

            <div style={{display:'flex'}}>
                <h3>{props.day}</h3>
                <button onClick={handleOnClick}>editar</button>
            </div>

            {renderEdit ? <EditDay day={props.day} api={props.api} setRender={setRender} setWeekIds={props.setWeekIds} weekIds={props.weekIds}/> : null}
            <div>------------------------</div>
            <div>Bloque 1</div>
            <div>Bloque 2</div>
            <div>Bloque 3</div>


        </div>

    )
}

export default Day;