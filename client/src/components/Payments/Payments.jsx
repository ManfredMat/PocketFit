import { useState } from "react";
import { PaymentList, PopWindow } from "./Payments.styles";

const paymentsSimulator = {

    received: {
        users: [

            {
                name: "Leandro",
                payDate: "dd-mm-aaaa",
                mount: 2222
            },

            {
                name: "Lucho",
                payDate: "dd-mm-aaaa",
                mount: 2222
            },

            {
                name: "Cande",
                payDate: "dd-mm-aaaa",
                mount: 2222
            },

            {
                name: "Jesus",
                payDate: "dd-mm-aaaa",
                mount: 2222
            },

            {
                name: "Ruben",
                payDate: "dd-mm-aaaa",
                mount: 345
            }
        ]


    },

    review: {
        users: [

            {
                name: "Leandro",
                payDate: "dd-mm-aaaa",
                mount: 2222
            },

            {
                name: "Lucho",
                payDate: "dd-mm-aaaa",
                mount: 2222
            },

            {
                name: "Cande",
                payDate: "dd-mm-aaaa",
                mount: 2222
            },

            {
                name: "Jesus",
                payDate: "dd-mm-aaaa",
                mount: 2222
            }
        ]
    },

    pending: {

        users: [

            {
                name: "Leandro",
                payDate: "dd-mm-aaaa",
                mount: 2222
            },

            {
                name: "Lucho",
                payDate: "dd-mm-aaaa",
                mount: 2222
            },

            {
                name: "Cande",
                payDate: "dd-mm-aaaa",
                mount: 2222
            },

            {
                name: "Jesus",
                payDate: "dd-mm-aaaa",
                mount: 2222
            }
        ]
    }


}

const Payments = () => {

    const [showWindow , setShowWindow] = useState(false);

    let total = paymentsSimulator.received.users.length + paymentsSimulator.review.users.length + paymentsSimulator.pending.users.length;

    const handleOnclick = () => {
        
        showWindow 
            ? setShowWindow(false)
            : setShowWindow(true)

    }

    return (

        <div>
            <h1>Pagos</h1>
            <h2>Pagos Recibidos {paymentsSimulator.received.users.length}/{total}</h2>

            <PaymentList>
                {paymentsSimulator.received.users.map((user) =>
                    <li key={user.name}>
                        <p>{user.name}</p>
                        <p>{user.payDate}</p>
                        <p>$ {user.mount}</p>
                    </li>
                )}
            </PaymentList>

            <h2>Pagos por revisar {paymentsSimulator.review.users.length}/{total}</h2>

            <PaymentList>
                {paymentsSimulator.received.users.map((user) =>
                    <li key={user.name}>
                        <p>{user.name}</p>
                        <p>{user.payDate}</p>
                        <p>$ {user.mount}</p>
                    </li>
                )}
            </PaymentList>

            <h2>Pagos pendientes  {paymentsSimulator.review.users.length}/{total}</h2>

            <PaymentList>
                {paymentsSimulator.pending.users.map((user) =>
                    <li key={user.name}>
                        <p>{user.name}</p>
                        <p>{user.payDate}</p>
                        <p>$ - {user.mount}</p>
                    </li>
                )}
            </PaymentList>
            
            {showWindow 
            ? <PopWindow>

                <h3>Configurar Medio de Pago</h3>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button onClick={handleOnclick}>Enviar </button>

              </PopWindow>
            : null}

            <button onClick={handleOnclick}>Configurar Medio de Pago</button>

        </div>


    )

}

export default Payments;