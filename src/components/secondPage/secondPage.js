import SecondPageBox from "./secondPageBox";
import SecondPageEndSection from "./secondPageEndSection";
import SecondPageHeader from "./secondPageHeader";

function SecondPage() {
    return(
      <>
      <div class="second_page">
        
        <SecondPageHeader/>
        
        <div class="second_page-mid-section">
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