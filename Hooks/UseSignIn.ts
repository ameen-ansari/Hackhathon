import { auth } from "@/config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

auth;
function UseSignIn() {
  let [values, setvalues] = useState<any>({
    email: "",
    password: "",
  });
  function register(e: any) {
    let inputs = { [e.target.name]: e.target.value };
    setvalues({ ...values, ...inputs });
  }

  let Router = useRouter();
  let submitH = async (e: any) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      alert("SignIn SuccessFully");
      Router.push("/");
    } catch (error) {
      alert(error);
    }
  };
  return {
    submitH,
    values,
    register,
  };
}

export default UseSignIn;
