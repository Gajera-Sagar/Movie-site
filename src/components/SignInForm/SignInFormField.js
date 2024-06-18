import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Auth, dataBase } from "../Firebase/Firebase.js";
import { doc, setDoc } from "firebase/firestore";

function SignInFormField({ signin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [validation, setValidation] = useState(false);

  const navigate = useNavigate();

  const emailSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        if (signin) {
          const login = await signInWithEmailAndPassword(Auth, email, password);
          navigate("/dashboard");
          localStorage.setItem("accessTocon", JSON.stringify(login.user.uid));
        } else {
          const newUser = await createUserWithEmailAndPassword(
            Auth,
            email,
            password
          );
          navigate("/dashboard");
          localStorage.setItem("accessTocon", JSON.stringify(newUser.user.uid));
          const user = Auth.currentUser;
          if (user) {
            await setDoc(doc(dataBase, "users", user.uid), {
              name: name,
              email: email,
              password: password,
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
      return;
    }
    setValidation(true);
  };

  return (
    <div className="absolute md:px-12 px-6 md:py-6 py-3 left-2/4 top-2/4 justify-center flex  bg-black bg-opacity-70  text-white rounded-md lg:w-1/3 md:w-5/12 w-10/12 -translate-x-2/4 -translate-y-2/4">
      <form action="" className="bg-transparent" onSubmit={emailSubmit}>
        <h1 className="text-white text-center font-bold text-4xl my-3 md:my-4">
          {signin ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!signin && (
          <input
            className="w-full p-3 border-gray-500 border my-2 bg-transparent"
            type="text"
            name="name"
            id="name"
            placeholder="Full name "
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          className="w-full p-3 border-gray-500 border my-2 bg-transparent"
          type="text"
          name="email"
          id="email"
          placeholder="Email id"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-3 border-gray-500 border my-2 bg-transparent"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {validation && (
          <p className="text-red-700">Enter valid Email id and Password</p>
        )}
        <button className="w-full bg-[red] p-2.5 md:my-4 my-3 text-white font-bold">
          {signin ? "Sign In" : "Sign Up"}
        </button>

        {signin && (
          <>
            {" "}
            <h1 className="text-center cursor-pointer">Forgot Password</h1>
            <p className="inline-block text-gray-400 font-medium my-3">
              New to Netflix?{" "}
              <span
                className="inline-block font-semibold cursor-pointer text-white"
                onClick={() => navigate("/")}
              >
                Sign up now.
              </span>
            </p>
          </>
        )}
      </form>
    </div>
  );
}

export default SignInFormField;
