import React, { useState } from "react";
import style from "../styles/LandingPage.module.css";
import Button from "./Button";
import eventtype from "../Images/eventtype.png";
import Burger from "../Images/Group 1067 (1).png";
import Image from "next/image";
import LandingPag from "@/Hooks/UseLandingPage";

function LandingPage() {
  const { pushEventPage, pushSignInPage ,indicator, setindicator} = LandingPag();

  return (
    <div className={style.Parent}>
      <div className={style.Navbar}>
        <div>
          <p>Event Planner</p>
        </div>
        <div>
          <Button value="Show Events" Func={pushEventPage} />
          <Button value={indicator} Func={pushSignInPage} />
          <Button value={<Image src={Burger} alt="" />} />
        </div>
      </div>
      <div className={style.Header}>
        <div>
          <p>Your Events on-chain</p>
          <p>The storefront you need to publish and Organize Events as NFTs</p>
          <Button value="Show Events" />
        </div>
        <div>
          <Image src={eventtype} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
