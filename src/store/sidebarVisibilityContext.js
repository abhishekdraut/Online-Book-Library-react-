import { createContext, useState } from "react";

const SidebarVisibiltyContext = createContext();



export function SidebarVisibilityContextProvider( children) {
  const [sidebarVisibility, setsidebarVisibility] = useState(false);
 
  function toggleSidebarVisibility() {
    return(
      setsidebarVisibility(sidebarVisibility ? false : true)
    )
    
  }

  return(
    <SidebarVisibiltyContext.Provider value={{sidebarVisibility,setsidebarVisibility,toggleSidebarVisibility}}{...children}>
        
    </SidebarVisibiltyContext.Provider>
  )
}


export default SidebarVisibiltyContext;