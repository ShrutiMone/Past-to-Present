import "bootstrap/dist/css/bootstrap.min.css"
import RandomItem from "./RandomItem";
const MoreItems=()=>{

let array=[0,1,2,3,4,5,6,7,8,9,10,12];

  return <>
  <div>



  <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

{
array.map((item,i)=>( 
 <RandomItem key={i} />))
}
       
     

        
        </div>
      </div>
    </div>
  </div>



  
  </>
}

export default MoreItems;