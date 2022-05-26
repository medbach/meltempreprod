import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Secret() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
            console.log("jWWWWWT")
                const { data } = await axios.post(
            "http://localhost:3001",
            {},
            {
                withCredentials: true,
            }
            );
            console.log("userrrrrr",data.user);

            if (!data.status) {
                console.log("111");
            removeCookie("jwt");
            navigate("/login");
            } 
            
            else {
                    console.log("dataaaaa",data);
                    console.log("userrrrrr",data.user);
                    toast(`Hi ${data.user} 🦄`, {
                    theme: "dark",
                });
            }
        }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <>
      <div className="private">
        <h1>Super Secret Page</h1>
        <button onClick={logOut}>Log out</button>
      </div>
      <ToastContainer />
    </>
  );
}
