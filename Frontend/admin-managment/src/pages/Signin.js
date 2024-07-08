
import React, { useState } from 'react';
import "./Signin.css"
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({email, password });
  };

  return (
    <div class="container">
      <div class="img">
			<img src="img/bg.svg"></img>
		</div>
	
		<div class="login-content">
			<form onSubmit={handleSubmit}>
				<img src="img/avatar.svg"></img>
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Username</h5>
                      <input  type="email"  class="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	
                     <input  type="password"  class="input" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
            	   </div>
            	</div>
              <button type="submit" class="btn" value="Login">Sign In</button>
            	
            </form>
        </div>
   </div>
   
  
  );
};

export default Signin;
