import "bootstrap/dist/css/bootstrap.min.css"
import "./BestSellers.css"
const BestSellers=()=>{
  return <>
  <div style={{border:"20px solid white"}}>
    <br />
    <h1 style={{color:"white", textAlign:"center"}}>OUR BEST SELLERS</h1>
    <br />
    <br />
    <div  class="cards">
  <div class="card item" style={{width: "18rem"}}>
  <img src="src\BestSellers-imgs\drafter.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Drafters</h5>
    <p class="card-text">Price:750/-
    <br />
    2 yrs used</p>
    <a href="#" class="btn btn-success">Owner</a>
  </div>
  </div>

  <div class="card item" style={{width: "18rem"}}>
  <img src="src\BestSellers-imgs\book.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Book</h5>
    <p class="card-text">Price:750/-
    <br />
    2 yrs used</p>
    <a href="#" class="btn btn-primary">shop</a>
  </div>
  </div>

  <div class="card item" style={{width: "18rem"}}>
  <img src="src\BestSellers-imgs\calculaotr.png" class="card-img-top" alt="..."/>
  <div class="card-body" >
    <h5 class="card-title">Calculator</h5>
    <p class="card-text">Price:750/-
    <br />
    2 yrs used</p>
    <a href="#" class="btn btn-dark">Shruti</a>
  </div>
</div>
</div>
  </div>
  </>
}
export default BestSellers;