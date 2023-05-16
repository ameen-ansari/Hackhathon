import { auth, db } from "@/config/Firebase";
import {
  addEvents,
  addUser,
  calledEventEntries,
  updateEntries,
  updateEvents,
  updateJoinedEvents,
} from "@/store/reducers";
import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function UseEventPage() {
  let dispatch = useDispatch();
  let store: any = useSelector((store: any) => store.reducers);
  const [data, setdata] = useState([]);
  // const [userEvent, setUserEvent] = useState([]);
  const [user, setuser] = useState<any>("");

  //Manage the form of event
  let openForm = () => {
    let CreateE: any = document.getElementById("CreateE");
    if (CreateE.style.display === "block") {
      CreateE.style.display = "none";
    } else {
      CreateE.style.display = "block";
    }
  };

  // Make state for the event ref in DB
  const [event, setEvent] = useState<any>({
    title: "",
    description: "",
    time: "",
    date: "",
    location: "",
    author: "",
    antries: [],
  });

  //Set user inputs as a state
  function register(e: any) {
    let inputs = { [e.target.name]: e.target.value };
    setEvent({ ...event, ...inputs });
  }

  //Make a function for get events from DB
  let getAvailableEvents = async () => {
    let userEvents: any = [];
    let Q1 = await getDocs(collection(db, "Events"));
    Q1.forEach((doc: any) => {
      userEvents.push(doc.data());
    });
    setdata(userEvents);
    return userEvents;
  };

  //Make a function for get user info from DB
  let getUserData = async () => {
    let user;
    if (auth.currentUser) {
      let docRef = doc(db, "Users", auth.currentUser?.uid);
      user = await getDoc(docRef);
      return user.data();
    }
  };

  useEffect(() => {
    getAvailableEvents().then((Events) => {
      //Update the store
      dispatch(addEvents(Events));
      getUserData().then((user) => {
        //Update the store again
        dispatch(addUser(user));
      });
    });
  }, []);

  let submitH = async (e: any) => {
    e.preventDefault();
    // Close the Event Adding Menu
    openForm();
    if (auth.currentUser) {
      if (event.description && event.location) {
        try {
          //add event in DB
          let eventStatus: any = await addDoc(collection(db, "Events"), event);
          // ref..
          let eventRef = doc(db, "Events", eventStatus.id);
          let userRef = doc(db, "Users", auth.currentUser.uid);
          // update event antry in DB
          await updateDoc(eventRef, {
            docId: eventStatus.id,
            author: {
              authorUID: auth.currentUser.uid,
              authorName: store.user.userName,
            },
            antries: [auth.currentUser.uid],
          });
          let userJoinedEvents = [...store.user.joinedEvents, eventStatus.id];
          // update user events in DB
          await updateDoc(userRef, {
            joinedEvents: userJoinedEvents,
          });
          //Update event in store very_important
          dispatch(updateJoinedEvents({ userJoinedEvents: userJoinedEvents }));
          //make the event
          let newEvent = {
            docId: eventStatus.id,
            author: auth.currentUser.uid,
            antries: [auth.currentUser.uid],
            ...event,
          };

          // update the store

          dispatch(updateEvents(newEvent));
        } catch (error) {
          alert(error);
        }
      } else {
        alert("Invalid Inputs");
      }
    } else {
      alert("Please SignUp");
    }
  };

  let joiner = async (e: any) => {
    if (auth.currentUser) {
      // ref.
      let userRef = doc(db, "Users", auth.currentUser.uid);
      let eventRef = doc(db, "Events", e.docId);
      if (store.user.joinedEvents.includes(e.docId)) {
        //remove antry id from DB
        let updatedAntries: any = [];
        e.antries.forEach((eachAntry: any) => {
          if (eachAntry !== auth.currentUser?.uid) {
            updatedAntries.push(eachAntry);
          }
        });
        await updateDoc(eventRef, {
          antries: updatedAntries,
        });
        dispatch(updateEntries({ entries: updatedAntries }));
        //remove id from DB
        let userJoinedEvents: any = [];
        store.user.joinedEvents.forEach((userDocId: any) => {
          if (userDocId !== e.docId) {
            userJoinedEvents.push(userDocId);
          }
        });
        await updateDoc(userRef, {
          joinedEvents: userJoinedEvents,
        });
        alert("Removed");
        //update store
        dispatch(updateJoinedEvents({ userJoinedEvents: userJoinedEvents }));
      } else {
        let updatedAntries = [...e.antries, auth.currentUser.uid];
        // update event antry in DB
        await updateDoc(eventRef, {
          antries: updatedAntries,
        });
        let userJoinedEvents = [...store.user.joinedEvents, e.docId];
        // update user events in DB
        await updateDoc(userRef, {
          joinedEvents: userJoinedEvents,
        });
        alert("Event Joined");
        //Update event in store very_important
        dispatch(updateJoinedEvents({ userJoinedEvents: userJoinedEvents }));
      }
    } else {
      alert("Please Signup");
    }
  };
  let router = useRouter();
  let showEntries = (e: any) => {
    dispatch(calledEventEntries(e));
    setTimeout(() => {
      router.push("/app/event/entries");
    }, 1000);
  };
  return {
    submitH,
    joiner,
    register,
    data,
    setdata,
    openForm,
    user,
    setuser,
    event,
    showEntries,
    setEvent,
  };
}

export default UseEventPage;
