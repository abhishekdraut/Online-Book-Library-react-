import { useContext } from "react";
import SidebarVisibiltyContext from "../../store/sidebarVisibilityContext";
import {Link} from "react-router-dom"
function Sidebar() {
const { sidebarVisibility, setsidebarVisibility, toggleSidebarVisibility } =
useContext(SidebarVisibiltyContext);
console.log(sidebarVisibility);
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
      <li>Contact</li>
    </ul>
    </div>
    <div className="sidebar_overlay-rightside" onClick={toggleSidebarVisibility}></div>
  </div>
  
</div>
);
}
export default Sidebar;