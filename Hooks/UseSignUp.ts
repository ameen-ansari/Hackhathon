import { auth, db } from "@/config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState } from "react";

function UseSignUp() {
  let [values, setvalues] = useState<any>({
    email: "",
    userName: "",
    phoneNumber: "",
    password: "",
    uid: "",
    joinedEvents: [],
  });
  function register(e: any) {
    let inputs = { [e.target.name]: e.target.value };
    setvalues({ ...values, ...inputs });
  }
  let Router = useRouter();
  let submitH = async (e: any) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      if (auth.currentUser) {
        await setDoc(doc(db, "Users", auth.currentUser?.uid), values);
      }
      alert("Acount Created");
      setvalues({
        email: "",
        userName: "",
        phoneNumber: "",
        password: "",
        uid: "",
      });
    } catch (error) {
      alert(error);
    }
    Router.push("/app/SignIn");
  };
  return {
    values,
    register,
    submitH,
  };
}

export default UseSignUp;
