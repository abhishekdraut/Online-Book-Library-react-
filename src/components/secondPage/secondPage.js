import SecondPageBox from "./secondPageBox";
import SecondPageEndSection from "./secondPageEndSection";
import SecondPageHeader from "./secondPageHeader";

function SecondPage() {
    return(
      <>
      <div className="second_page">
        
        <SecondPageHeader/>
        
        <div className="second_page-mid-section">
          <SecondPageBox/>
          <SecondPageBox/>
          <SecondPageBox/>
          <SecondPageBox/>
        </div>
      </div>
      <SecondPageEndSection></SecondPageEndSection>
      </>
      
    )
    
}
export default SecondPage;