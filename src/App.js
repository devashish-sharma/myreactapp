import React from 'react';
import './App.css';
import Base from './core/Base';
import img1 from './images/gift5.jpg';
import img2 from './images/gift1.jpg';
import img3 from './images/gift4.jpg';

const App = () => {
  return (
    <Base>
      <div id="carousel-example-2" className="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-2" data-slide-to="1"></li>
          <li data-target="#carousel-example-2" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="view">
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
              <div className="mask rgba-black-light"></div>
            </div>
            <div className="carousel-caption">
              <h3 className="h3-responsive">Light mask</h3>
              <p>First text</p>
            </div>
          </div>
          <div className="carousel-item">

            <div className="view">
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="Second slide" />
              <div className="mask rgba-black-strong"></div>
            </div>
            <div className="carousel-caption">
              <h3 className="h3-responsive">Strong mask</h3>
              <p>Secondary text</p>
            </div>
          </div>
          <div className="carousel-item">

            <div className="view">
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Third slide" />
              <div className="mask rgba-black-slight"></div>
            </div>
            <div className="carousel-caption">
              <h3 className="h3-responsive">Slight mask</h3>
              <p>Third text</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon p-2" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
          <span className="carousel-control-next-icon p-2" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="jumbotron jumbotron-fluid text-dark mt-1 bg-white">
        <div className="container">
          <h1 className="display-4">WELCOME</h1>
          <p className="lead">To E-Store</p>
        </div>
      </div>

      <a name="id1" title="Features" />

     <h2 className="display-4">NEW FEATURES</h2>
      <div className="container mt-4 mb-2">
        <div className="row ">
          <div className="col-sm">
            <div className="card-1" style={{
              maxWidth: "18rem"
            }} >
              <div className="card-header"><img src={img1} height="100%" width="100%" className="rounded card-img-top" width="100%" alt="" style={{
                maxWidth: "25rem"
              }} /></div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

            <div className="card-1 mt-2 bg-info " style={{
              maxWidth: "18rem"
            }} >
              <div className="card-header"><img src={img3} height="100%" width="100%" className="rounded" width="100%" alt="" /></div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card-1 bg-white text-dark" style={{
              maxWidth: "18rem"
            }} >
              <div className="card-header"><img src={img2} height="100%" width="100%" className="rounded" width="100%" alt="" /></div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

            <div className="card-1 mt-2 bg-warning" style={{
              maxWidth: "18rem"
            }} >
              <div className="card-header"><img src={img2} height="100%" width="100%" className="rounded" width="100%" alt="" /></div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card-1 bg-danger" style={{
              maxWidth: "18rem"
            }} >
              <div className="card-header"><img src={img1} height="100%" width="100%" className="rounded" width="100%" alt="" /></div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

            <div className="card-1 mt-2 bg-primary" style={{
              maxWidth: "18rem"
            }} >
              <div className="card-header"><img src={img3} height="100%" width="100%" className="rounded" width="100%" alt="" /></div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </Base >
  );
}

export default App;
