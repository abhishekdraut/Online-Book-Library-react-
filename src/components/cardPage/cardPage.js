function CardPage({card}) {
  console.log(card)
  
  
  
  
 
  

  
  return (
    <>
      <div>
        <div className="counter_container category_name">
          Category Name here
        </div>
      </div>
      <div className="card_layout background">
        {card.map((cardItem) => {
          return(
            <div className="card">
            <div className="card_inner">
              <img
                className="card_image"
                src={cardItem.image}
                alt=""
              />
            </div>
            <div className="card_details">
              <div>
                <a href="" className="card_details header">
                  {cardItem.name}
                </a>
              </div>
              <div className="card_details details">
                {cardItem.description}
              </div>
              <div className="card_details aurther">{cardItem.authorName}</div>
            </div>
          </div>

          );
          
          
          
         
          
        })}

        
        
        
      </div>
    </>
  );
}
export default CardPage;
