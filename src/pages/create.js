import { useState,useContext } from "react";
import AuthorsMultiSelect from "../components/authorSelection/autherMultiSelect";
import TagsMultiSelect from "../components/tagSelection/tagMultiSelect";
import UserContext from "../store/userContext";
import {useNavigate} from 'react-router-dom';


function CaretePage() {
  const [bookname, setbookname] = useState("");
  const [shortDescription, setshortDescription] = useState("");
  const [description, setdescription] = useState("");
  const [coverURL, setCoverURL] = useState('https://www.linkpicture.com/q/book-na-1.jpg');
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const{user}=useContext(UserContext);
  const navigate=useNavigate()





  const bookName = JSON.stringify({ name: bookname, short_Description: shortDescription });
  

  function uploadValue(e) {
    e.preventDefault();
    
    const selectedAuthorsArray = selectedAuthors.map((item) => item.value);
    const selectedTagsArray = selectedTags.map((item) => item.value);
    
    const obj1={"book_title": bookname,
            "book_short_description": shortDescription,
            "book_description": description,
            "cover_url": coverURL,
            "authors": selectedAuthorsArray,
            "tags": selectedTagsArray}
    console.log(obj1)

    if (bookname === "") {
      setError("The Bookname Should not be empty");
      setSuccess("");
      return;
    } else if (shortDescription === "") {
      setError("The shortdescription Should not be empty");
      setSuccess("");
      return;
    } else if (description === "") {
      setError("The description Should not be empty");
      setSuccess("");
      return;
    } else {
      console.log(user.jwt)
      setSuccess("processing....");
      fetch("https://iifsd.herokuapp.com/books", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.jwt}`
        },
        body: JSON.stringify(
          
              {
                "book_title": bookname,
                "book_short_description": shortDescription,
                "book_description": description,
                "cover_url": coverURL,
                "authors": selectedAuthorsArray,
                "tags": selectedTagsArray
    
              }
              ),

      })
        .then((responceData) => {
          return responceData.json();
        })
        .then((data) => {
          if(data.error){
            setSuccess("")
            console.log(data)
            setError(data.error)
          }
          else{
            setSuccess("Data Successfully submitted");
            setError("");
            navigate("/books")

          }
          

          
        })
        .catch(() => {
          setError("server error occourd");
          setSuccess("");
        });
    }
  }
  const Msg = () => {
    if (success === "") {
      return <h3 className="Error_Header">{error}</h3>;
    } else {
      return <h3 className="success_Header">{success}</h3>;
    }
  };
   
  
  if (user){
    return (
      <div className="PageCrate">
        <h1 className="CraatePageHeading">Create Book</h1>
        <div className="From_Wrapper">
        <form className ="create_book_form" onSubmit={uploadValue}>
          <Msg />
          <input className="form_input"type="text"placeholder="Enter the name of book" onChange={(e) => {setError(null); setbookname(e.target.value); }}></input>
          <input className="form_input" type="text" placeholder="Enter the short-description" onChange={(e) => { setError(null);setshortDescription(e.target.value); }}></input>
          <textarea className="form_input" onChange={(e)=>{setError(null);setdescription(e.target.value)}} placeholder="Enter your description here"></textarea>
          <label htmlFor="book-cover-url">Book cover URL:</label>
          <input className="form_input" type="text" id="book-cover-url" placeholder="URL of the cover" value={coverURL} onChange={(e) => {setCoverURL(e.target.value) }} />
          <AuthorsMultiSelect className="form_input" selectedAuthors={selectedAuthors} setSelectedAuthors={setSelectedAuthors} setError={setError} setSuccessMsg={setSuccess} />

          <TagsMultiSelect className="form_input" selectedTags={selectedTags} setSelectedTags={setSelectedTags} setError={setError} setSuccessMsg={setSuccess} />

          <input className="btn input_btn_login" type="submit"></input>

        </form>
        </div>
      </div>
    );

  }
  else{
    return(<div>Looks like you logged out please login again</div>)
    
  }
  
}
export default CaretePage;
