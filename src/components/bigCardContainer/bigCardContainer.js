import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../store/userContext";
import { useNavigate } from "react-router-dom";

function BigCardContainer({
  book_description,
  book_short_description,
  book_title,
  cover_url,
  authors,
  tags,
  id,
}) {
  const { user } = useContext(UserContext);
  const [delMsg, setdelMsg] = useState(null);
  const navigate = useNavigate();

  const Pills = () => {
    if (tags) {
      return tags.map((item) => {
        return (
          <Link class="pill" to={`pills/${item.id}`}>
            {item.tag_name}
          </Link>
        );
      });
    } else {
      return <></>;
    }
  };
  const Auther = () => {
    if (authors) {
      return authors.map((item) => {
        return (
          <Link class="authors_name" to={`authers/${item.id}`}>
            {item.author_name},
          </Link>
        );
      });
    } else {
      return <></>;
    }
  };

  const handelDelete = () => {
    setdelMsg(null);

    if (!user) {
      console.log("You have to login to delete this page");
    } else {
      fetch(`https://iifsd.herokuapp.com/books/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      })
        .then((responce) => {
          
          return responce.json();
        })
        .then((data) => {
          

          if (user != null) {
            navigate("/books");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const DeleteBtn=()=>{
    if(user){
      return(<><div className="delete_container">
      <button className="delete_container_btn" onClick={handelDelete}>Delete This Book</button></div></>)
    }
    else{
      return(<></>);
    }
  }
  return (
    <>
      <div>
        <div className="counter_container category_name">Book Details</div>
      </div>

      <div className="big_card_container">
        <div className="card big">
          {delMsg}
          <div className="card_inner left_side big">
            <img className="card_image big" src={cover_url} alt="big-card" />
          </div>
          <div className="card_details right_side big">
            <div className="card_inner right_side big header big">
              <a href="#" className="card_details right_side header big">
                {book_title}
              </a>
            </div>

            <div className="card_details right_side aurther big">
              Written By :<Auther />
            </div>
            <div className="card_details right_side border big"></div>
            <div className="card_details right_side details big">
              <div className="right_side details header"></div>
              <div className="right_side details summery">
                {book_short_description}
              </div>
              <div className="right_side details description">
                {book_description}
              </div>
            </div>
            <div className="right_side pills">
              <Pills />
            </div>
            <div className="right_side metadata">
              <div className="metadata-left">
                <div className="publisher">
                  Publisher: <a href="">{}</a>
                </div>
                <div className="isbn">
                  Isbn: <a href="">Asia</a>
                </div>
              </div>
              <div className className="metadata-right">
                <div className="released">
                  Release:<a href="#">{}</a>
                </div>
                <div className="formate">
                  Formate: <a href="#">Asia</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        
        

        
        
      </div>
      <DeleteBtn/>
    </>
  );
}

export default BigCardContainer;
