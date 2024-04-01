import "bootstrap/dist/css/bootstrap.min.css"

const RandomItem=()=>{
 
  return <>
  
  <div class="col">
          <div class="card shadow-sm">
          <img src="src\assets\pen.png" alt="" />

            <div class="card-body">
              <p class="card-text">
                <h5>INK PEN</h5>
                Price:25/-
                <br />
                10 days used.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" >View</button>
                  
                </div>

              </div>
            </div>
          </div>
        </div>
  </>
}
export default RandomItem;