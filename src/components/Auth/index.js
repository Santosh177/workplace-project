import React, { useContext } from "react";
import btnIcon from "../../assects/btn.png";
import "./auth.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
function Auth({ usertype }) {
  const provider = new GoogleAuthProvider();
  const [userData, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  const redirectUser = () => {
    // if usertype is candidate
    // if usertype is employer
    if (usertype === "candidate") {
      // if user exists in database
      if (
        // if user exists in database
        false // find a way to check if user exists in database
      ) {
        // check the user type in the database for this user
        // if in the database the user type is candidate
        // redirect to candidate profile
        if (
          // if in the database the user type is candidate
          true
        ) {
          navigate("/candidate/profile");
        }
        // else show error message this id is already registered as employer
        else {
          alert("this id is already registered as employer");
          return;
        }
      }
      // if user does not exist in database
      else {
        navigate("/candidate/onboarding");
      }
    } else {
      // if user exists in database
      if (
        // if user exists in database
        false
      ) {
        // check the user type in the database for this user
        // if in the database the user type is employer
        // redirect to employer profile
        if (
          // if in the database the user type is employer
          true
        ) {
          navigate("/employer/profile");
        }
        //else show error message this id is already registered as candidate
        else {
          alert("this id is already registered as candidate");
          return;
        }
      }
      // if user does not exist in database
      else {
        navigate("/employer/onboarding");
      }
    }
  };

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const { user } = result;
        const { email, displayName, photoURL } = user;
        console.log(email, displayName, photoURL, "user");
        dispatch({
          type: "LOGIN",
          payload: {
            email,
            displayName,
            photoURL,
          },
        });
        redirectUser();
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error, "error");
      });
  };
  return (
    <div className="auth-container">
      <div>
        <h1>Welcome {usertype}!!</h1>
        <h3>Please Sign IN</h3>

        <div>
          <button onClick={signIn}>
            <img src={btnIcon} alt="btn" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
