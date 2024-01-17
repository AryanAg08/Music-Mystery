import React, { useState } from 'react';
import './loginsignup.css';

import userIcon from './person.png';
import email_icon from './email.png'
import password_icon from './password.png';

export  function LoginPage() { 

    const[action,setAction]= useState("Sign Up");

    const UserDetails = {
     email: "",
     password: "",
  }
  const [userDetails, setUserDetails] = useState(UserDetails);

  const onFormUpdate = (category, value) => {
    setUserDetails({
        ...userDetails,
        [category]: value
    })
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
  let response = await fetch("http://localhost:5001/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userDetails),
});
    
    
  }

    return (
      <div className='Loginnnn'>
        <div className='containerrr'>
          <div className="headerrr">
            <div className="texttt">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={userIcon} alt=""/>
                <input type="text" placeholder="Name"/>
            </div>}
            <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email" value={userDetails.email} placeholder="Email Id" onChange={(e) => onFormUpdate('email', e.target.value)}/>
            </div>
            <div className="input">
                <img src={password_icon} alt=""/>
                <input type="password" value={userDetails.password} placeholder="password" onChange={(e) => onFormUpdate('password', e.target.value)}/>
            </div>
          </div> 
          {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password?<span>Click here!</span></div>}
          
          <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>  
            <div className='submit-container'>
              <a href='http://localhost:5001/redirect'> <button className='google' onClick={(e) => handleSubmit(e)}>  Submit </button></a>
             <a href='http://localhost:5001/google'><button  className='google'>Login with Google</button></a>
            </div>
        </div>
        </div>
    );
};
