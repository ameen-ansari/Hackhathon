import React, { useState } from "react";
import style from "../styles/LandingPage.module.css";
import Button from "./Button";
import eventtype from "../Images/eventtype.png";
import Burger from "../Images/Group 1067 (1).png";
import Image from "next/image";
import LandingPag from "@/Hooks/UseLandingPage";

function LandingPage() {
  const {
    showNav,
    showOff,
    pushEventPage,
    pushSignInPage,
    indicator,
    setindicator,
  } = LandingPag();

  return (
    <>
      <div id="NavbarPlusHeader" className={style.Parent}>
        <div className={style.Header}>
          <div>
            <p>Your Events on-chain</p>
            <p>
              The storefront you need to publish and Organize Events as NFTs
            </p>
            <Button value="Show Events" />
          </div>
          <div>
            <Image src={eventtype} alt="" />
          </div>
        </div>
      </div>
      <div id="Offcan" className={`${style.OffCan}`}>
        <p onClick={showNav}>X</p>
        <Button value={indicator} Func={pushSignInPage} />
        <Button value="Show Events" Func={pushEventPage} />
      </div>
    </>
  );
}

export default LandingPage;
