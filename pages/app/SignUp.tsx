import logincss from "/styles/SignUp.module.css";
import Link from "next/link";
import UseSignUp from "@/Hooks/UseSignUp";


export default function SignUp() {
  const { values, register, submitH } = UseSignUp();
  return (
    <div className={logincss.container}>
      <div className={logincss.login}>
        <div className={logincss.head}>
          <p style={{ fontFamily: "prata" }}>
            Welcome to <span style={{ color: "#F46A06" }}>EVENT-PLANNER</span>
          </p>
        </div>
        <p>Sign up</p>
        <div className="w-100">
          <form className="w-100">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Email address
              </label>
              <input
                type="email"
                placeholder="Enter username or email address"
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
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="User Name"
                name="userName"
                value={values.userName}
                onChange={register}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Contact Number
              </label>
              <input
                placeholder="Contact Number"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="phoneNumber"
                value={values.phoneNumber}
                aria-describedby="emailHelp"
                onInput={register}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                placeholder="Password"
                name="password"
                type="password"
                className="form-control"
                value={values.password}
                id="exampleInputPassword1"
                onChange={register}
              />
              <div id="emailHelp" className="form-text">
                <Link href="/app/SignIn" style={{ textDecoration: "none" }}>
                  Have a acount ? SignIn
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
