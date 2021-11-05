import { useContext } from "react";
import  SidebarVisibiltyContext from "../../store/sidebarVisibilityContext";

function Sidebar() {
  const{sidebarVisibility,setsidebarVisibility,toggleSidebarVisibility}=useContext(SidebarVisibiltyContext)
  console.log(sidebarVisibility);
    return(
        <div className={`${sidebarVisibility ? "overlay sidebar-overlay-show overlay--show":"overlay sidebar-overlay-show"} `} id="sidebar-overlay">
        
        <div id="sidebar" className={`sidebar ${sidebarVisibility ? "active":""}`}>
            <a
              
              className="
                hamburger hamburger--light hamburger--cross
                sidebar__toggle-sidebar
              "
            >
              <div className="x">
                <button className="x-button" onClick={toggleSidebarVisibility}>
                X 
                </button>
                 
              </div>
            </a>
    
            <ul className="sidebar_menu">
              <li>home</li>
              <li>work</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
        </div>
       
    

      </div>
      
    )
    
}
export default Sidebar;