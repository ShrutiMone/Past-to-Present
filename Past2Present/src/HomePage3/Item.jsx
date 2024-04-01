import "./Item.css"
import "bootstrap/dist/css/bootstrap.min.css"
const Item=()=>{
  return <>
  <div class="note" >
  <h2 class="slide" >Note :- Contact of sellers are verified.If any inappropriate content appears then please report spam.</h2>
  </div>
<div class="">
  <div class="row p-2 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg border border-secondary text-body-emphasis mt-5 bg-light" style={{marginLeft:"200px",marginRight:"200px",marginBottom:"150px",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>
  
      <span class=" p-3 p-lg-5 pt-lg-3" style={{maxWidth:"fit-content"}}>
        <h1 class="display-4 fw-bold lh-1  mb-4 " style={{color:"Black"}} >PEN</h1> <br />
        <p class="lead"><h5>Seller Info:
          </h5>
          <br />
          <div style={{display:"flex"}}>  Name: <h5 class="pt-2">   <pre> Shruti Mone</pre></h5></div>
        
          <div style={{display:"flex"}}>  Contact: <h5 class="pt-2">   <pre> 98152XXXXX</pre></h5></div>
          <div style={{display:"flex"}}>  Email: <h5 class="pt-2">   <pre> shrutimone@gmail.com</pre></h5></div>
          <div style={{display:"flex"}}>  Address: <h5 class="pt-2">   <pre> Padmavati,dhankavdi,katraj</pre></h5></div>
          
          
          </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-danger btn-lg px-4 me-md-2 fw-bold">Report Spam</button>
          
        </div>
      </span>
      <div class="col-10 col-sm-8 col-lg-6 mt-4" style={{paddingBottom:"50px"}}>
        <h2 style={{color:"gray"}}><pre> Image</pre></h2>
        <img src="src\assets\pen.png" class="d-block mx-lg-auto img-fluid  pl-5 " alt="Bootstrap Themes" width="500"  loading="lazy" style={{borderRadius:"20px"}}/>
        <br />
        <pre>    About Item : <p class="fw-bold">    This is an ink pen.I used it for 2 days.Wanna sell it urgently.</p>
   </pre> <h5>
    <pre class="fw-bold "  >   PRICE : 25/-</pre> </h5>
      </div>
    </div>
   
    </div>
  </>
}
export default Item;