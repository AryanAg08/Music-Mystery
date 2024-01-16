import React from "react";

export const About = (props) => {
  // const ss = "font-size: 40px";
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about1.webp" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p  style={{fontSize: '26px' , wordSpacing: '5px', lineHeight: '1.5'}}>{props.data ? props.data.paragraph : "loading..."}</p>
              {/* <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                 
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};