import "bootstrap/dist/css/bootstrap.min.css"
import UpdatedHeader from "./UpdatedHeader";
import { useState } from "react";
const Sidebar=()=>{
const [selectedTab,setSelectedTab]=useState("My Profile");
  return <>
<UpdatedHeader/>
<div class="d-flex-end flex-column flex-shrink-0 p-3 text-bg-dark border border-primary" style={{marginTop:"80px",width: "280px",height:"100vh"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" previewlistener="true">
  
      <span class="fs-4">ACCOUNT</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto ">
      <li class="nav-item p-2" >
        <a href="#" class="nav-link active" aria-current="page" >
        
          My Profile
        </a>
      </li>
      <li class=" p-2 ">
        <a href="#" class="nav-link text-white">
    
          My Uploads
        </a>
      </li>
      <li class=" p-2 ">
        <a href="#" class="nav-link text-white">
    
          My Requests
        </a>
      </li>
      <li class=" p-2 ">
        <a href="#" class="nav-link text-white">
        
          Sign Out
        </a>
      </li>
     
    </ul>
    <hr/>
   
  </div>
  
  </>
}
export default Sidebar;