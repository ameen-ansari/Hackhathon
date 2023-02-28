import { auth } from "@/config/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

function LandingPage() {
  const [indicator, setindicator] = useState<string>("");
  let Router = useRouter();
  let pushSignInPage = () => {
    Router.push("/app/SignIn");
    signOut(auth);
  };

  let pushEventPage = () => {
    Router.push("/app/EventPage");
  };
  onAuthStateChanged(auth, async (user: any) => {
    if (user) {
      setindicator("LogOut");
    } else {
      setindicator("LogIn");
    }
  });
  return {
    pushSignInPage,
    pushEventPage,
    indicator,
    setindicator,
  };
}

export default LandingPage;
