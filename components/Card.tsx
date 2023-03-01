import { auth, db } from "@/config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import style from "../styles/card.module.css";

function Card(prop: any) {
  const [UserEvents, setUserEvents] = useState<any>([]);
  onAuthStateChanged(auth, async (userfroms: any) => {
    if (userfroms) {
      let UserEventsTempArr: any = [];
      let finallArr: any = [];
      let Q: any = await getDocs(collection(db, "Users"));
      Q.forEach((user: any, i: number) => {
        if (user.data().uid == userfroms.uid) {
          UserEventsTempArr.push(...user.data().joinedEvents);
          setUserEvents(UserEventsTempArr);
        }
      });
    } else {
    }
  });
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
            <p style={{color:'green'}}>{prop.creator}</p>
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
            <p className={style.tmdt}>
              {prop.dt} {prop.time}
            </p>
          </div>
          <div>
            <p>Attendees:</p>
            <div>
              {prop?.antr?.map((user: any, i: any) => {
                return (
                  <div key={i}>
                    <p style={{ fontSize: "40%" }}>{user}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            style={{
              padding: "0.4rem 2rem",
              borderRadius: "4px",
              margin: "auto",
            }}
            onClick={prop.Func}
          >
            JOin
          </button>
          {UserEvents.map((id: any, i: number) => {
            return (
              <div key={i} style={{ width: "100%" }}>
                {id == prop.docId ? (
                  <button
                    style={{
                      padding: "0.4rem 2rem",
                      borderRadius: "4px",
                      margin: "auto",
                    }}
                  >
                    You Are Joined
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
