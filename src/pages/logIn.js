import UserContext from "../store/userContext";
import { useState, useEffect, useContext } from "react";
import {useNavigate} from 'react-router-dom';
function LogIN(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate=useNavigate()
  console.log(navigate)
   
  useEffect(()=>{
       if (user !=null)
       {
          navigate('/')

       }


   },[user,navigate])
  
  
  
    function handleSubmit(e) {
    e.preventDefault();

    fetch("https://iifsd.herokuapp.com/auth/local/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier: email, password: password }),
    })
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        if (data.user != null) {
          console.log(data.user);
          setUser(data.user);
        }else {
          setError(data.message[0].messages[0].message);
        }
      })
      .catch(() => {
        setError("Something Wrong with Url ");
      });
  }

  return (
    <div className="login-container">
      Login first to use Full website .<div className="errormsg">{error}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setError(null);
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setError(null);
            setPassword(e.target.value);
          }}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default LogIN;
