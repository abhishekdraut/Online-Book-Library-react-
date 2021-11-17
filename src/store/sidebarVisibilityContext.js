import { createContext, useState } from "react";

const SidebarVisibiltyContextState = createContext();



export function SidebarVisibilityContextProvider( children) {
  const [sidebarVisibility, setsidebarVisibility] = useState(false);
 
  function toggleSidebarVisibility() {
    return(
      setsidebarVisibility(sidebarVisibility ? false : true)
    )
    
  }

  return(
    <SidebarVisibiltyContextState.Provider value={{sidebarVisibility,setsidebarVisibility,toggleSidebarVisibility}}{...children}>
        
    </SidebarVisibiltyContextState.Provider>
  )
}


export default SidebarVisibiltyContextState;