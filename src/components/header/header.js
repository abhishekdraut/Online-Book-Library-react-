import { createContext,useContext } from "react";
import SidebarVisibiltyContext from "../../store/sidebarVisibilityContext";
import logo from "./img/logo.png"
function Header() {
  const{sidebarVisibility,setsidebarVisibility,toggleSidebarVisibility}=useContext(SidebarVisibiltyContext)
return(

<div  className="site_header">
  
        <div className="site_header items">
        <button className="site_header_button" onClick={toggleSidebarVisibility}>
          <a  className="site_header burger site-header">

            <div className="burger slice one"></div>
            <div className="burger slice two"></div>
            <div className="burger slice three"></div>
          </a>
         </button>
          <div className="site_header-logo">
            <a href="#">
              <img
                src={logo}
                alt="logo"
                className="site_header-logo-image"
              />
            </a>
          </div>
          <a href="#" className="site_header btn btn-light"> Sign In </a>
        </div>
      </div>

)




}
export default Header;