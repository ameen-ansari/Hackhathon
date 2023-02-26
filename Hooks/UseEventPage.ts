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
  const [user, setuser] = useState<any>({
    userName: "",
  });

  //   useEffect(() => {
  //     let arr: any = [];
  //     let a = async () => {
  //       let Q: any = await getDocs(collection(db, "Events"));
  //       Q.forEach((doc: any) => {
  //         arr.push(doc.data());
  //       });
  //       setdata(arr);
  //       console.log(data);
  //     };
  //     a();
  //   }, []);

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

  // onAuthStateChanged(auth, async () => {
  //   const q = query(
  //     collection(db, "Users"),
  //     where("uid", "==", auth.currentUser?.uid)
  //   );
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     setuser(doc.data());
  //   });
  // });

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
  // let joiner =  (e: any) => {
  //   // alert("Time Over Working On It In Home");
  //   console.log(e);
  //   console.log();
    

  //   // let arr: any = [];
  //   // let q: any = await getDocs(collection(db, "Events"));
  //   // q.forEach((doc: any) => {
  //   //   if (doc.id == e.docId) {
  //   //     arr.push(...doc.data().antries);
  //   //   }
  //   // });
  //   // arr = [...arr, user.userName];
  //   // setarr1(arr);

  //   // let ref = doc(db, "Events", e.docId);
  //   // updateDoc(ref, {
  //   //   antries: arr1,
  //   // });

  //   // console.log('xyz..');
  // };
  return {
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
  };
}

export default UseEventPage;
