import React, { useState } from 'react'

export default function Aboutus() {
    const [myStyle, setMode] =  useState({
        color:'black',
        backgroundColor:'white'
    });

    const [btnText, setBtnText] =  useState("Dark Mode");

    const toggleMode = () => { 
        if(myStyle.color === 'white'){
            setMode({
                color:'black',
                backgroundColor:'white'
            });
            setBtnText("Dark Mode");
        } else {
            setMode({
                color:'white',
                backgroundColor: 'black'
            });

            setBtnText("Light Mode");
        }
    }
  return (
    <div>
        <div className="container my-5" style={myStyle}>
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{btnText}</label>
          </div>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                <h1 className="text-center mb-4">About Us</h1>
                <p>Welcome to our company! We are dedicated to...</p>
                <p>Our team is committed to...</p>
                </div>
            </div>
        </div>
    </div>
  )
}
