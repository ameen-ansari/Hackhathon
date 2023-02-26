import { auth } from "@/config/Firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

function LandingPage() {
  let Router = useRouter();
  let pushSignInPage = () => {
    Router.push("/app/SignIn");
    signOut(auth);
  };

  let pushEventPage = () => {
    Router.push("/app/EventPage");
  };
  return {
    pushSignInPage,
    pushEventPage,
  };
}

export default LandingPage;
