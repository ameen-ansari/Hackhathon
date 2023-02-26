import { auth, db } from '@/config/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

function UseSignUp() {
    
    let [values, setvalues] = useState<any>({
        email: "",
        userName: "",
        phoneNumber: "",
        password: "",
        uid: "",
      });
      function register(e: any) {
        let inputs = { [e.target.name]: e.target.value };
        setvalues({ ...values, ...inputs });
      }
      let Router = useRouter()
      let submitH = async (e: any) => {
        e.preventDefault();
        try {
          let user = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          let sendData = await addDoc(collection(db, "Users"), values);
          let ref = doc(db, "Users", sendData.id);
          updateDoc(ref, {
            uid: user.user.uid,
            docId: sendData.id,
          });
    
          alert("Acount Created");
          setvalues({
            email: "",
            userName: "",
            phoneNumber: "",
            password: "",
            uid: "",
          })
        } catch (error) {
          alert(error);
        }
        Router.push('/app/SignIn')
        
      };
  return{
    values ,
    register,
    submitH
  }
}

export default UseSignUp
