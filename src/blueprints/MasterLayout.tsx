import { useState } from "react";
import Layout1 from "./Layout1";
import menuItems from "./MenuOptions";



export const MasterLayout =()=>{
    const[activeLayout, setActiveLayout] = useState("boxed");
    return(
        {activeLayout == "layout1" && <Layout1 menus={menuItems} />}
        {activeLayout == "layout2" && <Layout1 menus={menuItems} />}
    )
};