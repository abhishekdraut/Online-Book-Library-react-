function Sidebar() {
    return(
        <div class="overlay sidebar-overlay" id="sidebar-overlay">
        <div id="sidebar" class="sidebar">
            <a
              href="javascript:void(0)"
              class="
                hamburger hamburger--light hamburger--cross
                sidebar__toggle-sidebar
              "
            >
              <div class="x">
                  X
              </div>
            </a>
    
            <ul class="sidebar_menu">
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