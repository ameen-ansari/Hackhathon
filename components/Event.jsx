import React from "react";
import Button from "./Button";
import style from "../styles/card.module.css";

function Event(prop) {
  return (
    <div key={prop.key} style={{ fontFamily: "Open Sans" }}>
      <div className={`${style.cardP} card`}>
        <h5 className="card-header" style={{fontSize:28 , fontFamily:'Prata' , fontWeight:800}}>Event Title</h5>
        <div className="card-body">
          <div>
            <p>Creater:</p>
            <p>{prop.creator}</p>
          </div>
          <div>
            <p>Description:</p>
            <p className="card-text">
           {prop.desc}
            </p>
          </div>
          <div>
            <p>Address:</p>
            <p>{prop.addr}</p>
          </div>
          <div>
            <p>Date & Time:</p>
            <p>{prop.dt} {prop.time}</p>
          </div>
  <div>
    <p>Attendees:</p>
    <div>
    {
      prop.antr.map((user)=>{
return(
  <div>
    <p>{user}</p>
  </div>
)
      })
    }
    </div>
  </div>
          <a onClick={prop.Func} className="btn btn-primary">
            Join Event
          </a>
        </div>
      </div>
    </div>
  );
}

export default Event;
