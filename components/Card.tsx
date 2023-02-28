import { auth, db } from "@/config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import style from "../styles/card.module.css";

function Card(prop: any) {
  return (
    <div key={prop.key} style={{ fontFamily: "Open Sans" }}>
      <div className={`${style.cardP} card`}>
        <h5
          className="card-header"
          style={{ fontSize: 28, fontFamily: "Prata", fontWeight: 800 }}
        >
          Event Title
        </h5>
        <div className="card-body">
          <div>
            <p>Creater:</p>
            <p>{prop.creator}</p>
          </div>
          <div>
            <p>Description:</p>
            <p className="card-text">{prop.desc}</p>
          </div>
          <div>
            <p>Address:</p>
            <p>{prop.addr}</p>
          </div>
          <div>
            <p>Date & Time:</p>
            <p>
              {prop.dt} {prop.time}
            </p>
          </div>
          <div>
            <p>Attendees:</p>
            <div>
              {prop?.antr?.map((user: any, i: any) => {
                return (
                  <div key={i}>
                    <p style={{fontSize:'40%'}}>{user}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            style={{ padding: "0.3rem 2rem", borderRadius: 9 }}
            onClick={prop.Func}
          >Join</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
