import style from "@/styles/Event.module.css";
import Event from "../../components/Card";
import Button from "../../components/Button";
import UseEventPage from "@/Hooks/UseEventPage";
import { auth, db } from "@/config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useSelector } from "react-redux";

function EventPage() {
  const {
    submitH,
    joiner,
    register,
    data,
    setdata,
    openForm,
    user,
    setuser,
    event,
    setEvent,
  } = UseEventPage();
  let store: any = useSelector((store: any) => store.reducers);
  let u:any = ():any => {
    return "hello";
  };

  return (
    <div className={`${style.Parent} `}>
      <p>Events</p>
      <Button value="Create Event" Func={openForm} />
      <p style={{ fontSize: 22 }} className="my-5 text-center">
        AVAILABLE EVENTS
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        {store.events.map((event: any, i: any) => {
          return (
            <div className={style.eventContainer} key={i}>
              <button
                style={{
                  borderRadius: 4,
                  padding: "2px 15px",
                  fontSize: 16,
                  cursor: "pointer",
                  position: "absolute",
                  right: 25,
                }}
                onClick={() => joiner(event)}
              >
                <b>
                  {store?.user?.joinedEvents?.includes(event.docId)
                    ? "Leave"
                    : "Join"}
                </b>
              </button>
              <h2 className={style.eventHeading}>{event.title}</h2>
              <div className={style.eventDetail}>
                <dl className={style.eventItem}>
                  <dt>Description:</dt>
                  <dd style={{ marginLeft: 70 }}>{event.description}</dd>
                  <dt>Date:</dt>
                  <dd style={{ marginLeft: 70 }}>{event.date}</dd>
                  <dt>Author:</dt>
                  <dd style={{ marginLeft: 70 }}>{event.author}</dd>
                  <dt>Address:</dt>
                  <dd style={{ marginLeft: 70 }}>
                    <i> {event.location}</i>
                  </dd>
                  <dt>antries:</dt>
                  <dd style={{ marginLeft: 70 }}>
                    <button
                      style={{
                        borderRadius: 4,
                        padding: "2px 15px",
                        fontSize: 16,
                        cursor: "pointer",
                        border: "none",
                        fontWeight: 600,
                      }}
                    >
                      <u>Show Entries</u>
                    </button>
                  </dd>
                </dl>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.CreateE} id="CreateE">
        <form className="w-100">
          <div className="my-4">
            <input
              type="text"
              placeholder="Enter Title Of Event"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="title"
              value={event.title}
              onChange={register}
            />
          </div>
          <div className="my-4">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Description of Event"
              name="description"
              value={event.description}
              onChange={register}
            />
          </div>
          <div className="my-4">
            <input
              placeholder="Address Of Event"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="location"
              value={event.location}
              aria-describedby="emailHelp"
              onInput={register}
            />
          </div>
          <div className="my-4">
            <input
              placeholder="Enter Data Of Event"
              name="date"
              type="date"
              className="form-control"
              value={event.date}
              id="exampleInputPassword1"
              onChange={register}
            />
          </div>
          <div className="my-4">
            <input
              placeholder="Enter Time Of Event"
              name="time"
              type="time"
              className="form-control"
              value={event.time}
              id="exampleInputPassword1"
              onChange={register}
            />
          </div>
          <button
            onClick={submitH}
            style={{ fontFamily: "Open Sans" }}
            type="submit"
            className=" btn btn-primary"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default EventPage;
