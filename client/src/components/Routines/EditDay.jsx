import { useState } from "react";
import EditBlock from "./EditBlock";

const EditDay = (props) => {

    const [renderEditBlock , setRender] = useState({
        render: false,
        block: 1,
        excersices: []
    });


    const handleOnclick = (block,excersices) => {
        
        renderEditBlock.render 
        ? setRender({
            render: false,
            block: 1,
            excersices: []
        }) 
        : setRender({
            render: true,
            block: block,
            excersices: excersices
        });
    }

    return (

        <div>
            <div>
                <h2>Editando {props.day}</h2>
                <div>
                    <h3>Bloque 1</h3>
                    <button onClick={() => handleOnclick(1,[""])}>editar</button>
                </div>

                <div>
                    Ejercicio 1
                    Ejercico 2
                    Ejercicio 3
                </div>
            </div>

            <div>
                <div>
                    <h3>Bloque 2</h3>
                    <button onClick={() => handleOnclick(2,[""])}>editar</button>
                </div>

                <div>
                    Ejercicio 1
                    Ejercico 2
                    Ejercicio 3
                </div>
            </div>

            <div>
                <div>
                    <h3>Bloque 3</h3>
                    <button onClick={() => handleOnclick(3,[""])}>editar</button>
                </div>

                <div>
                    Ejercicio 1
                    Ejercico 2
                    Ejercicio 3
                </div>
            </div>

            {renderEditBlock.render ? <EditBlock day={props.day} api={props.api} block={renderEditBlock.block} excersices={renderEditBlock.excersices}/> : null}

        </div>


    )
}

export default EditDay;