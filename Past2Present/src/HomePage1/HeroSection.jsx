import "bootstrap/dist/css/bootstrap.min.css"
// import "./HeroSection.css"
const HeroSection=()=>{

  return <>
<div style={{border:"50px solid white",}}>
  <div style={{border:"150px solid black", borderRadius:"20px"}}>
  <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 " style={{color:"white",fontSize:"80px" , fontFamily:"serif"}}>Welcome to 
        <br />Past-to-Present </h1>
        <h5 style={{color:"gray",marginBottom:"25px"}}>
          
          <br />  Get everything you need. </h5>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
         <br />
          <button type="button" class="btn btn-outline-primary btn-lg px-4">SELL</button>
        </div>
      </div>
      <div class="col-lg-4  overflow-hidden shadow-lg">
          {/* <img class= "image border border-secondary "src="src\assets\image.png" alt="" style={{width:"350px",marginBottom:"20px",borderRadius:"20px"}} /> */}
      </div>
    </div>
    </div>
    </div>
  </>
}
export default HeroSection;
// style={{border:"3px solid white" , borderRadius:"20px" , width:"500px" , marginBottom:"80px", marginTop:"100px"}}