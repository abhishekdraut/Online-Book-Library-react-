import { createContext, useContext } from "react";
import SidebarVisibiltyContextState from "../../store/sidebarVisibilityContext";
import UserContext from "../../store/userContext";
import logo from "./img/logo.png";
import {Link} from 'react-router-dom'

function Header() {
  const { sidebarVisibility, setsidebarVisibility, toggleSidebarVisibility } =
    useContext(SidebarVisibiltyContextState);
  const { user, setUser } = useContext(UserContext);
  const logoutState = () => {
    return(setUser(null))
    
  };
  
  
  const HeaderSection = () => {
    if (user ===null) {
      return (
        <>
          <button className="site_header_button user">
           <Link to="/login" className="site_header btn btn-light" exact> 
              
              Log in
            
            </Link>
          </button>
          <button className="site_header_button user">
            <Link to="/signup" className="site_header btn btn-light">
              
              Sign up
           </Link>
          </button>
        </>
      );
    } else {
      return (
        <>
        <a href="#" className="user_logoutbtn">Hi {user.user.username}</a>
        <button className="site_header_button " onClick={logoutState} >
          <a href="#" className="site_header btn btn-light">
            
            Logout
          </a>
        </button>
      </>
      );
    }
  };

  return (
    <div className="site_header">
      <div className="site_header items">
        <button
          className="site_header_button"
          onClick={toggleSidebarVisibility}
        >
          <a className="site_header burger site-header">
            <div className="burger slice one"></div>
            <div className="burger slice two"></div>
            <div className="burger slice three"></div>
          </a>
        </button>
        <div className="site_header-logo">
          <a href="">
            <img src={logo} alt="logo" className="site_header-logo-image" />
          </a>
        </div>
        <div className="site_header btn btn-light">
          <HeaderSection />
        </div>
      </div>
    </div>
  );
}
export default Header;
