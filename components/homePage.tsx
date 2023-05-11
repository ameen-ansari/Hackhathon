import React, { useState } from "react";
import img from "/Images/logo.png";
import Image from "next/image";
import style from "./homePage.module.css";
import LandingPage from "./LandingPage";
import { useRouter } from "next/router";

function HomePage() {
  const Router = useRouter()
  const manageOffcanvas = () => {
    const offcanvas = document.getElementById("offcanvas");
    if (offcanvas) {
      if (offcanvas?.style.display === "none") {
        offcanvas.style.display = "block";
      } else {
        offcanvas.style.display = "none";
      }
    }
  };

  let pushSignup = () => {
    Router.push("/app/SignUp");
  };
  let pushEventsPage = () => {
    Router.push("/app/addevent");
  };
  return (
    <div>
      <header className={style.header}>
        <Image src={img} alt="EventHub Logo" width={40} height={40} />
        <nav className={style.nav}>
          <ul>
            <li>
              <p onClick={pushSignup}>Sign Up</p>
            </li>
            <li>
              <p onClick={pushEventsPage}>Create Event</p>
            </li>
            <li>
              <p onClick={pushEventsPage}>Events</p>
            </li>
            <li>
              <a onClick={()=>{
                alert('for contact ameentech123@gmail.com')
              }}>Contact</a>
            </li>
          </ul>
        </nav>
        <div
          id="hamburger"
          className={style.hamburger}
          onClick={manageOffcanvas}
        >
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
      </header>
      <div
        id="offcanvas"
        style={{ display: "none" }}
        className={style.offcanvas}
      >
        <p
          onClick={manageOffcanvas}
          style={{
            textAlign: "center",
            cursor: "pointer",
            padding: "15px 5px 5px 5px",
          }}
        >
          Home
        </p>
        <p
          onClick={manageOffcanvas}
          style={{ textAlign: "center", cursor: "pointer", padding: "5px" }}
        >
          Create Event
        </p>
        <p
          onClick={manageOffcanvas}
          style={{ textAlign: "center", cursor: "pointer", padding: "5px" }}
        >
          My Events
        </p>
        <p
          onClick={manageOffcanvas}
          style={{ textAlign: "center", cursor: "pointer", padding: "5px" }}
        >
          Contact
        </p>
      </div>
      <main>
        <section className={style.hero}>
          <h1>Welcome to EventHub</h1>
          <p>Your one-stop platform for creating and managing events.</p>
        </section>
        <LandingPage />

        <section className={style.features}>
          <h2>Key Features</h2>
          <div className={style.features}>
            <h3>Create Events</h3>
            <p>
              Seamlessly create and customize your events with EventHub's
              intuitive event creation tool.
            </p>
          </div>
          <div className={style.features}>
            <h3>Ticketing</h3>
            <p>
              Sell tickets online directly through EventHub. Set ticket prices,
              create different ticket types, and manage inventory easily.
            </p>
          </div>
          <div className={style.features}>
            <h3>Event Promotion</h3>
            <p>
              Spread the word about your event with our built-in promotion
              tools. Share event details across social media platforms and send
              email invitations.
            </p>
          </div>
          <div className={style.features}>
            <h3>Attendee Management</h3>
            <p>
              Keep track of your event attendees with EventHub's attendee
              management system. Monitor ticket sales, view attendee profiles,
              and send updates.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
