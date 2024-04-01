import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "./Sidebar";
import Footer from "../HomePage1/Footer";


const Profile=()=>{

  return <>
  <div style={{display:"flex"}}>
  <div class="col-lg-4 " style={{margin:"100px",width:"500px"}}>
    <div class="border border-secondary p-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-color)"></rect></svg>
        <br />
        
        <h2 class="fw-normal mt-4" >Kanchan Khemnar</h2>
        <br />
       
        <p class="lead " style={{display:"flex"}}><h5>Name :</h5 >- KANCHAN BHAGWAT KHEMNAR
        </p>
        <p class="lead" style={{display:"flex"}}><h5>Registration :</h5 >- I2K22XXXX
        </p>
        <p class="lead" style={{display:"flex"}}><h5>Mobile :</h5 >- 91533XXXXX
        </p>
        <p class="lead" style={{display:"flex"}}><h5>Email :</h5 >- kanchankhemnar@gmail.com
        
        </p>
        <p class="lead" style={{display:"flex"}}><h5>Stree/Address :</h5 >- Nay sangnar jaa
        </p>
        <p class="lead" style={{display:"flex"}}><h5>Town/City :</h5 >- Nahi sangnar mhanl na
        </p>
        <p><a class="btn btn-primary" href="#">Update »</a></p>
        </div>
      </div>
      <div style={{marginLeft:"35%"}}><Sidebar/></div>
      
      </div>
      <Footer/>
  </>
}
export default Profile;