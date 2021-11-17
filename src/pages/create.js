import { useState } from "react";
function CaretePage() {
  const [bookname, setbookname] = useState("");
  const [favSubject, setfavSubject] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const bookName = JSON.stringify({ name: bookname, favSubject: favSubject });

  function uploadValue(e) {
    e.preventDefault();
    
    if (bookname === "") {
      setError("The Bookname Should not be empty");
      setSuccess("");
      return;
    } else if (favSubject === "") {
      setError("The FavSubject Should not be empty");
      setSuccess("");
      return;
    } else {
        setSuccess("processing....")
      fetch("https://iifsd.herokuapp.com/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: bookName,
      })
        .then((responceData) => {
          return responceData.json();
        })
        .then((data) => {
            
           setSuccess("Data Successfully submitted") ;
           setError("")
           
          console.log(data);
        })
        .catch(() => {
          setError("server error occourd");
          setSuccess("")
        });
    }
  }
  const Msg=()=>{
    if(success===""){
        return(<h3 className="Error_Header">{error}</h3>)
     

  }
  else{
      return(<h3 className="success_Header">{success}</h3>)
  }
  
    }
   
  
  

  return (
    <div className="PageCrate">
      <h1 className="CraatePageHeading">Create Book</h1>

      <form onSubmit={uploadValue}>
          
          <Msg/>
        <input
          type="text"
          placeholder="Enter the name of book"
          onChange={(e) => {
            setbookname(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Enter the favsubject"
          onChange={(e) => {
            setfavSubject(e.target.value);
          }}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
export default CaretePage;
