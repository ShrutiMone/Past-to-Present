import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "./Sidebar";
import Footer from "../HomePage1/Footer";
import RandomItem from "../HomePage1/RandomItem";
import MoreItems from "../HomePage1/MoreItems";

const MyUploads=()=>{
  return <>
  <div style={{display:"flex"}}>
  <div>



  <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
       <RandomItem/>
       <RandomItem/>
       <RandomItem/>
    
      

        
        </div>
      </div>
    </div>
  </div>

<Sidebar/>
</div>
<Footer/>
  </>
}
export default MyUploads;