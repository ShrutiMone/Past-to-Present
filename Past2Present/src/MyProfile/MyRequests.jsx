import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import Footer from "../HomePage1/Footer";
const MyRequests = () => {
  return (
    <>
      <div >
        <div style={{display:"flex"}}>
        <div style={{width:"100%",height:"100%",marginTop:"150px",marginLeft:"400px"}}>
          <div
            class="modal modal-sheet position-static d-block  p-4 py-md-5"
            tabindex="-1"
            role="dialog"
            id="modalSheet"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content rounded-4 shadow">
                <div class="modal-header border-bottom-0">
                  <h1 class="modal-title fs-5">REQUEST</h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body py-0">
                  <p>Request Item</p>
                </div>
                <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                  <button type="button" class="btn btn-lg btn-primary">
                    Make changes
                  </button>
                  <button
                    type="button"
                    class="btn btn-lg btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Delete Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "30%" }}>
          <Sidebar />
        </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default MyRequests;
