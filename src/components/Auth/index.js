import React, { useContext } from "react";
import btnIcon from "../../assects/btn.png";
import "./auth.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth,db } from "../../firebaseconfig";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import {doc, getDoc } from "firebase/firestore"
function Auth({ usertype }) {
  const provider = new GoogleAuthProvider();
  const [userData, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  const redirectUser = async(email) => {
    // if usertype is candidate
    // if usertype is employer
   let u= await getDoc(doc(db,"users",email))// call firebase function to check if users exist in database
   let userInfoFromDb = null;
   if (u.exists()) {
     userInfoFromDb = u.data();
      console.log(u.data())
    }
   if (usertype === "candidate") {
      // if user exists in database
      if (
        // if user exists in database
        userInfoFromDb // find a way to check if user exists in database
      ) {
        // check the user type in the database for this user
        // if in the database the user type is candidate
        // redirect to candidate profile
        if (
          // if in the database the user type is candidate
          userInfoFromDb.userType === "candidate"
        ) {
          dispatch({
            type: "SET_USER_INFO",
            payload: userInfoFromDb,
          });
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
      
      if (
       
       userInfoFromDb
      ) {
        
        if (
          userInfoFromDb.userType === "employer"
        ) {
          dispatch({
            type: "SET_USER_INFO",
            payload: userInfoFromDb,
          });
          navigate("/employer/profile");
        }
        else {
          alert("this id is already registered as candidate");
          return;
        }
      }
      
      else {
        navigate("/employer/onboarding");
      }
    }
  };

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
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
        redirectUser(email);
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
