import { useState } from "react";
import EditDay from "./EditDay";

const Day = (props) => {

    const [renderEdit , setRender] = useState(false);
    

    const handleOnClick = () => {
        
        renderEdit 
            ? setRender(false)
            : setRender(true) 
    }
 
    return(
        <div>        
        <h3>{props.day}</h3>
        <button onClick= {handleOnClick}>editar</button>
        {renderEdit ? <EditDay day={props.day} api={props.api}/> : null}
        <div>------------------------</div>
        <div>BLoque 1</div>
        <div>Bloque 2</div>
        <div>Bloque 3</div>


        </div>

    )
}

export default Day;