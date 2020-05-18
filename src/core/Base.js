import React from 'react';
import Navigation from './Navigation';
import img2 from '../images/dothefive.gif';
import BackToTop from "react-back-to-top-button";

const Base = ({ title = "MY Title",
    description = "My Description",
    classname = "text-white",
    children
}) => {
    return (
        <div>
            <Navigation />

            <div className={classname}> {children} </div>

            <footer className="footer bg-white p-2 mt-4">
                <div className="container text-dark p-3">
                    <img src={img2} width="30" height="30" alt="" loading="lazy" />
                    <h1><span className="badge bg-danger text-white">E-Store</span></h1>
                    <span className="text-dark">
                        Create by DEVASHISH SHARMA</span><br></br>
                    <span className="text-dark">
                        An Amazing <span className="text-danger">E-STORE</span> </span>
                    <i className="fa fa-copyright"></i> Copyright 2020
                </div>

            </footer>
            <BackToTop
                showAt={100}
                speed={1000}
                easing="easeInOutSine"
                style={{ color: "red" }}
            >
                <span><i class="fa fa-chevron-circle-up fa-1x rounded-circle"></i></span>
            </BackToTop>
        </div>
    );
}

export default Base;
