import BigCardContainer from "../components/bigCardContainer/bigCardContainer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BookDemo(props) {
  const params = useParams();
  const id = params.id;
  const [fullBook, setFullBook] = useState(null);
  

  useEffect(() => {
    fetch(`https://iifsd.herokuapp.com/books/${id}`)
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {setFullBook(data)});
  },[setFullBook]);
  
  
  return <BigCardContainer {...fullBook} />;
}
export default BookDemo;
