import React, { useState } from "react";

const GymName = "CrossGym";
const month = "December";
const monthDays = [
  [[1], ["Pelea en vivo"]],
  [[3] ,[]],
  [[4] ,[]],
  [[5] ,[]],
  [[6] ,[]],
  [[7] ,[]],
  [[8] ,[]],
  [[9] ,[]],
  [[10] ,[]],
  [[11] ,[]],
  [[12] ,[]],
  [[13] ,[]],
  [[14] ,[]],
  [[15] ,[]],
  [[16] ,[]],
  [[17] ,[]],
  [[18] ,[]],
  [[19] ,[]],
  [[20] ,[]],
  [[21] ,[]],
  [[22] ,[]],
  [[23] ,[]],
  [[24] ,["Navidad"]],
  [[25] ,[]],
  [[26] ,[]],
  [[27] ,[]],
  [[28] ,[]],
  [[29] ,[]],
  [[30] ,[]],
  [[31] ,["Año Nuevo"]],
]

function Home() {
  return (
    <div>
      <nav></nav>
      <section>
        <h1>Bienvenido, {GymName}!</h1>
        <div name="row-1">
          <section name="mes">
            <h2>{month}</h2>
            <div>{
              monthDays.map((e) => 
              <div>
                <h3>{e[0]}</h3>
                <ul>
                  {e[1].map((evento) => <li>{evento}</li>)}
                </ul>
              </div>
              )
              }</div>
          </section>
          <section name="hoy">
            <h2>Hoy</h2>
          </section>
        </div>
        <div name="row-2"></div>
      </section>
    </div>
  );
}

export default Home;
