import React from "react";
import style from "../styles/LandingPage.module.css";
import Button from "./Button";
import eventtype from '../Images/eventtype.png'
import Burger from '../Images/Group 1067 (1).png'
import Image from "next/image";
import { useRouter } from "next/router";
import { auth } from "@/config/Firebase";
import { signOut } from "firebase/auth";

function LandingPage() {
let Router = useRouter()
let pushSignInPage = () => {
  Router.push('/app/SignIn')
  signOut(auth)
}

let pushEventPage = () => {
  Router.push('/app/EventPage')

}
  return (
    <div className={style.Parent}>
      <div className={style.Navbar}>
        <div>
          <p>Event Planner</p>
        </div>
        <div>
          <Button value="Show Events" Func={pushEventPage}/>
          <Button value={auth.currentUser ? 'LogOut' : 'LogIn'} Func={pushSignInPage} />
          <Button value={<Image src={Burger} alt="" />}/>
        </div>
      </div>
      <div className={style.Header}>
        <div>
          <p>Your Events on-chain</p>
          <p>The  storefront you need to publish and Organize Events as NFTs</p>
          <Button value="Show Events" />
        </div>
        <div>
          <Image src={eventtype} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;