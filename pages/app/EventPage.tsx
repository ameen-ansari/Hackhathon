import style from "@/styles/Event.module.css";
import Event from "../../components/Card";
import Button from "../../components/Button";
import UseEventPage from "@/Hooks/UseEventPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/config/Firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect } from "react";

function EventPage() {
  const {
    submitH,
    // joiner,
    register,
    data,
    setdata,
    openForm,
    user,
    setuser,
    event,
    setEvent,
    arr1,
    setarr1,
  } = UseEventPage();
  // onAuthStateChanged(auth, async () => {
  // const q = query(
  //   collection(db, "Users"),
  //   where("uid", "==", auth.currentUser?.uid)
  // );
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });
  // });
  // useEffect(() => {
  //   let a = async () => {
  //     const q =await query(
  //       collection(db, "Users"),
  //       where("uid", "==", auth.currentUser?.uid)
  //     );
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       let name = doc.data().userName;
  //       setuser(name);
  //     });

  //     console.log(user);
      
  //   };
  //   a();
  // },[]);
  let joiner = async (e: any) => {
    alert('Time Out')
    //   const q = query(
    //     collection(db, "Users"),
    //     where("uid", "==", auth.currentUser?.uid)
    //   );
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.forEach((doc) => {
    //  let name =  doc.data().userName
    //     setuser(name)
    //   });
    // let arr: any = [];
    // let q2: any = await getDocs(collection(db, "Events"));
    // q2.forEach((doc: any) => {
    //   if (doc.id == e.docId) {
    //     arr.push(...doc.data().antries);
    //   }
    // });

    // arr = [...arr, user.userName];
    // setarr1(arr);
    // console.log(user.userName);

    // let ref = doc(db, "Events", e.docId);
    // updateDoc(ref, {
    //   antries: arr1,
    // });
  };
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
                Func={() => joiner(event)}
                antr={event.antries}
                // value2='Join Event'
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
