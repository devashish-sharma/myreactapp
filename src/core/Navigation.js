import React from 'react';
import img1 from '../images/shopping-online.jpg';

const navigation = () => {
    return (
        <div>
            <div className="container-fluid mt-2 text-right">
                <div className="row">
                    <div className="col-sm">
                        <p>Welcome to E-Store ! Wrap new offers / gift every single day on Weekends</p>
                    </div>

                    <div className="col-sm">
                        <button type="button" className="btn btn-sm btn-danger ml-2">Sign in</button>
                        <button type="button" className="btn btn-sm  btn-info ml-2">Sign up</button>
                    </div>
                </div>
            </div>

            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white" data-spy="affix">
                <a className="navbar-brand" href="/">
                    <img src={img1} width="100px" height="60px" alt="" loading="lazy" className="img-fluid" />
                </a>

                <a className="navbar-brand" href="/">E-Store</a>

                <button className="navbar-toggler btn btn-outline-danger btn-sm" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <i className="fa fa-align-justify text-dark" aria-hidden="true"></i></button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto text-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#id1">Features</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <a className="dropdown-item" href="/">Something else here</a>
                                <a className="dropdown-item" href="/">Or a link</a>
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <a className="dropdown-item" href="/">Something else here</a>
                                <a className="dropdown-item" href="/">Or a link</a>
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <a className="dropdown-item" href="/">Something else here</a>
                                <a className="dropdown-item" href="/">Or a link</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#id1">Category</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#id1">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#id1">Reach Us</a>
                        </li>
                    </ul>

                    <button type="button" className="btn btn-sm btn-outline-danger ml-2">Add To Cart</button>
                    <button type="button" className="btn btn-sm btn-outline-info ml-2">Wish List</button>

                    <form className="form-inline ml-2">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-sm btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>

                </div>
            </nav>
        </div >
    );
}

export default navigation;
