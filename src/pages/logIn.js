import UserContext from "../store/userContext";
import { useState, useEffect, useContext } from "react";
import {useNavigate} from 'react-router-dom';
function LogIN(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate=useNavigate()
 
   
  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);
  
  
  
    function handleSubmit(e) {
      e.preventDefault();

      fetch("https://iifsd.herokuapp.com/auth/local/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: email,
            password: password
          }),
        })
        .then((responce) => {
          return responce.json();
        })
        .then((data) => {
          console.log(data);
          if (data.user != null) {
            console.log(data.user);
            setUser(data);
          } else {
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
      <form className='create_book_form' onSubmit={handleSubmit}>
        <input className="form_input" type="email" value={email} onChange={(e) => { setError(null); setEmail(e.target.value); }}></input>
        <input className="form_input" type="password" value={password} onChange={(e) => { setError(null); setPassword(e.target.value); }}></input>
        <input className="btn input_btn login_submit" type="submit"></input>
      </form>
    </div>
  );
}

export default LogIN;
