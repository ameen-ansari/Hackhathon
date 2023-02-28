import { auth, db } from "@/config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

function UseEventPage() {
  const [data, setdata] = useState([]);
  const [userEvents, setUserEvent] = useState([]);
  const [user, setuser] = useState<any>("");

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
    antries: [],
  });
  function register(e: any) {
    let inputs = { [e.target.name]: e.target.value };
    setEvent({ ...event, ...inputs });
  }

  onAuthStateChanged(auth, async (user: any) => {
    if (user) {
      const q = query(
        collection(db, "Users"),
        where("uid", "==", auth.currentUser?.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setuser(doc.data());
        setUserEvent(doc.data().joinedEvents);
      });
    } else {
      setuser("");
    }
  });

  let a = async () => {
    let arr: any = [];
    let Q = await getDocs(collection(db, "Events"));
    Q.forEach((doc: any) => {
      arr.push(doc.data());
    });
    setdata(arr);
  };
  useEffect(() => {
    a();
  }, []);

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
    let data2: any = [...data];
    if (auth.currentUser) {
      if (event.description && event.location) {
        try {
          let userEvent: any = await addDoc(collection(db, "Events"), event);
          let ref = doc(db, "Events", userEvent.id);
          await updateDoc(ref, {
            docId: userEvent.id,
            creator: user.userName,
          });
          data2 = [
            ...data2,
            {
              ...event,
              docId: userEvent.id,
              creator: user.userName,
            },
          ];
          setdata(data2);
          alert("Event Added");
        } catch (error) {
          alert(error);
        }
      } else {
        alert("Please Fill All Fields");
      }
    } else {
      alert("Please SignIn");
    }
  };

  let callback1 = async (e: any) => {
    if (auth.currentUser) {
      let arr3: any = [];
      let arr2: any = [];
      data.forEach((event: any) => {
        if (event.docId === e.docId) {
          arr3.push(...event.antries);
        }
      });
      arr3.forEach((doc: any) => {
        if (doc !== auth.currentUser?.email) {
          arr2.push(doc);
        }
      });
      arr3 = [...arr2, auth.currentUser?.email];
      let ref = doc(db, "Events", e.docId);
      alert("Joined");
      updateDoc(ref, {
        antries: arr3,
        status: "Joined",
      });
      a();
    } else {
      alert("Please SignIn");
    }
  };
  let joiner = async (e: any) => {
    if (auth.currentUser) {
      let userEventsTempArr: any = [...userEvents];
      let getEvent = userEvents.some((docId: any) => {
        if (docId === e.docId) {
          alert("Already Jined");
          return true;
        } else {
          return false;
        }
      });
      if (getEvent === false) {
        try {
          console.log(userEvents);

          let ref: any = doc(db, "Users", user.docId);
          updateDoc(ref, {
            joinedEvents: [...userEventsTempArr , e.docId],
          });
          alert("JOiNED");
        } catch (error) {
          alert(error);
        }
      }
    }
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
    setEvent,
  };
}

export default UseEventPage;
