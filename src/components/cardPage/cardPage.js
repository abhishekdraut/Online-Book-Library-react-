import{useEffect,useState} from 'react';
function CardPage({card}) {
  
  
  const [book, setBook] = useState();
  const once=null;
  useEffect(() => {
    fetch("https://iifsd.herokuapp.com/books",{
      
    })
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        
        setBook(data);
      });
  },[once]);
  console.log("first",book)
  
  
  
 
  

  
  return (
    <>
      <div>
        <div className="counter_container category_name">
          Category Name here
        </div>
      </div>
      <div className="card_layout background">
        {book.map((bookItem) => {
          return(
            <div className="card">
            <div className="card_inner">
              <img
                className="card_image"
                src={bookItem.cover_url}
                alt=""
              />
            </div>
            <div className="card_details">
              <div>
                <a href="" className="card_details header">
                  {bookItem.book_title}
                </a>
              </div>
              <div className="card_details details">
                {bookItem.book_short_description}
              </div>
              <div className="card_details aurther">{bookItem.authors[0].author_name}</div>
            </div>
          </div>

          );
          
          
          
         
          
        })}

        
        
        
      </div>
    </>
  );
}
export default CardPage;
