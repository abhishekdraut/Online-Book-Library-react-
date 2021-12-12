
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
function ThirdPage() {
  const [books,setbooks]=useState(null);
  const[booLoadError,setbookLoadError] = useState(null)
  

  useEffect(()=>{
    fetch("https://iifsd.herokuapp.com/books")
    .then((response)=>{return response.json();})
    .then((data)=>{
      setbooks(data);
      })
    .catch(()=>{setbookLoadError("Error Occured while loading the books")})
   },[setbooks])

   function BookCoverLoad(){
    
      if(books){
        return(
          books.map((item)=>{
            return (
              <>
                <li>
                  <Link to={`/bookdemo/${item.id}`}>
                    <img src={item.cover_url} alt="" className="book_image" />
                  </Link>
                </li>
              </>
            );
          })
        )
        
      }
      else{
        return(<div></div>)
      }
    


  }
    return(
        <div className="third_page-background">
        <div className="third_page_header">Bestselling Books and Audiobooks</div>
        
        <ul className="third_page_books_container">

           <BookCoverLoad/>
            
            
          



        </ul>
        <div>
          <a href="" className="btn solid-btn hero-btn book_container_btn"
            >Read free for 30 days</a
          >
        </div>
        <div className="hero_region_header-three_book-container">
          Only ₹299/month after. Cancel anytime.
        </div>
      </div>
    )
    
}


export default ThirdPage;