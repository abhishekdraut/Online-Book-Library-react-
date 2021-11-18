import { useContext } from "react";
import SidebarVisibiltyContextState from "../../store/sidebarVisibilityContext";
import {Link} from "react-router-dom"
import UserContext from "../../store/userContext";



function Sidebar() {
const { sidebarVisibility, setsidebarVisibility, toggleSidebarVisibility } =
useContext(SidebarVisibiltyContextState);
const {user}=useContext(UserContext);

const BookOption=()=>{
  
  if (user===null){
    
    return(<></>)
  }
  else{
    return(<Link to="/createpage"><li>Create Book</li></Link>)
  }
  
}


return (
<div className={`${ sidebarVisibility ? "overlay sidebar-overlay-show overlay--show" : "overlay sidebar-overlay-show " }
  `} id="sidebar-overlay">
  <div id="sidebar" className={`sidebar ${sidebarVisibility ? "active" : "" }`}>
    <div className="sidebar_overlay-leftside">
    
      <div className="x">
        <button className="x-button" onClick={toggleSidebarVisibility}>
          X
        </button>
      </div>
    

    <ul className="sidebar_menu">
     <Link to="/" exact> <li>home</li></Link>
     <Link to="/books" exact> <li>Books</li></Link>
     <Link to= "/bookdemo" > <li>Book Demo</li></Link>
     <BookOption/>
     
    </ul>
    </div>
    <div className="sidebar_overlay-rightside" onClick={toggleSidebarVisibility}></div>
  </div>
  
</div>
);
}
export default Sidebar;