import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Calendar from "./Calendar";

const GymName = "CrossGym";

function month(date) {
  let options = { month: "long" };
  return date.toLocaleDateString(undefined, options);
}

function Home() {
  const date = new Date();
  return (
    <div className="">
      <NavBar />
      <section>
        <h1>Bienvenido, {GymName}!</h1>
        <div name="row-1">
          <section name="mes">
            <h2>{month(date)}</h2>
            <Calendar year={date.getFullYear()} month={date.getMonth()} />
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
