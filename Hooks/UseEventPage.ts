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
  const [arr1, setarr1] = useState([]);
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

  useEffect(() => {
    let arr: any = [];
    let a = async () => {
      let Q = await getDocs(collection(db, "Events"));
      Q.forEach((doc: any) => {
        arr.push(doc.data());
      });
      setdata(arr);
    };
    a();
  }, []);
  useEffect(() => {
    let myArr: any = [];
    let a = async () => {
      if (auth.currentUser) {
      }
    };
    a();
  }, [data]);

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

  let callback1 = async (e: any) => {
    if (auth.currentUser) {
      let arr: any = [];
      let arr2: any = [];
      console.log(auth.currentUser?.email);
      data.forEach((event: any) => {
        if (event.docId === e.docId) {
          arr.push(...event.antries);
        }
      });
      arr.forEach((doc: any) => {
        if (doc !== auth.currentUser?.email) {
          arr2.push(doc);
        }else{
          alert('Already joined')
        }
      });
      arr = [...arr2, auth.currentUser?.email];
      let ref = doc(db, "Events", e.docId);
      updateDoc(ref, {
        antries: arr,
      });
    } else {
      alert("Please SignIn");
    }
  };
  let joiner = async (e: any) => {
    callback1(e);
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
    arr1,
    setarr1,
  };
}

export default UseEventPage;
