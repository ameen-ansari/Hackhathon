import React, { useEffect, useState } from "react";
import style from "@/styles/Event.module.css";
import Event from "../../components/Event";
import Button from "../../components/Button";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../../config/Firebase";
import { onAuthStateChanged } from "firebase/auth";

function EventPage() {
  const [data, setdata] = useState([]);
  const [user, setuser] = useState<any>({
    userName: "",
  });
  useEffect(() => {
    let arr: any = [];
    let a = async () => {
      let Q: any = await getDocs(collection(db, "Events"));
      Q.forEach((doc: any) => {
        arr.push(doc.data());
      });
      setdata(arr);
      console.log(data);
    };
    a();
  }, []);

  let openForm = () => {
    let CreateE: any = document.getElementById("CreateE");
    if (CreateE.style.display === "block") {
      CreateE.style.display = "none";
    } else {
      CreateE.style.display = "block";
      CreateE.style.position = "fixed";
      CreateE.style.top = "15%";
      CreateE.style.left = "15%";
    }
  };
  const [event, setEvent] = useState<any>({
    title: "",
    description: "",
    time: "",
    date: "",
    location: "",
    antries:[]
  });
  function register(e: any) {
    let inputs = { [e.target.name]: e.target.value };
    setEvent({ ...event, ...inputs });
  }

  onAuthStateChanged(auth, async () => {
    const q = query(
      collection(db, "Users"),
      where("uid", "==", auth.currentUser?.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setuser(doc.data());
    });
  });
  let submitH = async (e: any) => {
    let CreateE: any = document.getElementById("CreateE");
    if (CreateE.style.display === "block") {
      CreateE.style.display = "none";
    } else {
      CreateE.style.display = "block";
      CreateE.style.position = "fixed";
      CreateE.style.top = "15%";
      CreateE.style.left = "15%";
    }

    e.preventDefault();
    if (event.description && event.location) {
      try {
        let userEvent: any = await addDoc(collection(db, "Events"), event);

        let ref = doc(db, "Events", userEvent.id);
        await updateDoc(ref, {
          docId: userEvent.id,
          creator: user.userName,
        });
        alert("Event Added");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please Fill All Fields");
    }
  };
let joiner = (e:any) => {
console.log(e);

}
  return (
    <div className={`${style.Parent} `}>
      <p>Events</p>
      <Button value="Create Event" Func={openForm} />
      <p style={{ fontSize: 22 }} className="my-5">
        AVAILABLE EVENTS
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {data.map((event: any, i: any) => {
          return (
            <div key={i}>
              <Event
                desc={event.description}
                dt={event.date}
                addr={event.location}
                time={event.time}
                creator={event.creator}
                Func={()=>joiner(event)}
                antr={event.antries}
              />
            </div>
          );
        })}
      </div>
      <div className={style.CreateE} id="CreateE">
        <form className="w-100">
          <div className="my-4">
            <input
              type="email"
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
