import logincss from "/styles/SignUp.module.css";
import Link from "next/link";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/Firebase";
import { useRouter } from "next/router";
import UseSignIn from "@/Hooks/UseSignIn";

export default function SignIn() {
  const { register, values, submitH } = UseSignIn();
  return (
    <div className={logincss.container}>
      <div className={logincss.login}>
        <div className={logincss.head}>
          <p style={{ fontFamily: "prata" }}>
            Welcome to <span style={{ color: "#F46A06" }}>EVENT PLANNER</span>
          </p>
        </div>
        <p>Sign In</p>
        <div className="w-100 mb-4">
          <form className="w-100 mb-5">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Email address
              </label>
              <input
                type="email"
                placeholder="Enter Email address"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={values.email}
                onChange={register}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={register}
              />
              <div id="emailHelp" className="form-text mt-1">
                <Link href="/app/SignUp" style={{ textDecoration: "none" }}>
                  Don't have a Acount ? SignUP
                </Link>
              </div>
            </div>
            <button onClick={submitH} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
