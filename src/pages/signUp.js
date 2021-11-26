import {useState,useEffect,useContext} from 'react'
import UserContext from '../store/userContext'
import {useNavigate} from "react-router-dom"


function SignUP() {
    const[error,setError]=useState(null)
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[password2,setPassword2]=useState("")
    const{user,setUser}=useContext(UserContext)
    const navigate=useNavigate() 
    

    useEffect(() => {
      if (user) {
          if (user.jwt){
            navigate("/");
          }
        
      }
    }, [user]);
    

    const handleSubmit=(e)=>{
    e.preventDefault();
    if (username ===""){return(setError('username is null'))}
    else if (password===""){return(setError('password is null'))}
    else if (email===""){return(setError('email is null'))}
    else{fetch('https://iifsd.herokuapp.com/auth/local/register',
    {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            email:email,
            password:password})
    }).then((responce_data)=>{
        
        return responce_data.json()
    }).then((data)=>{
        if (data.jwt){setUser(data);}
        
        console.log("data==>",data)
        return(setError(data.error))
    }).catch(()=>{
        console.log("bad request")
        setError("somethong wrong with server urls pls try again latter ")

    })}
    }

    
    
    
    
    
    











    return (
        <div className="From_Wrapper">  
           
            <form className="create_book_form" onSubmit={handleSubmit}>
            <div class="signup_error"> {error}</div>
            <label for="username">Enter the username</label>
            <input type="text"className="form_input" value={username} onChange={(e) => { setError(null);setUsername(e.target.value)}} name="username"/>
            <label for="mail">Enter the mail id</label>
            <input type='email' className="form_input" value={email} onChange={(e) => { setError(null);setEmail(e.target.value)}} name='mail'></input>
            <label for="password1">Enter the password</label>
            <input type='password' className="form_input" value={password} onChange={(e) => { setError(null);setPassword(e.target.value)}} name='password1'></input>
            <label for="password2" >Confirme your password</label>
            <input type='text'className="form_input" value={password2} onChange={(e) => { setError(null);setPassword2(e.target.value)}} name='password2'></input>
            <input type="submit" className="btn signup_submit"/>
            </form>



        </div>



    )
}

export default SignUP