
import React, { useState } from 'react';
import axios from 'axios'
import"./Signup.css"

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    try {
      const response =  axios.post('http://localhost:3000/signup', {
        username,
        password,confirmPassword
      });
      console.log('Signup successful', response.data);
    } catch (error) {
      if (error.response) {
        
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('Request data:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error message:', error.message);
      }
      console.log('Error config:', error.config);
    }
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
                 <div class="div">
           		    	<h5>Confirm Password</h5>
           		    	
                     <input  type="password"  class="input" placeholder="Confirm Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
            	   </div>
            	</div>
              <button type="submit" class="btn" value="Login">Sign Up</button>
            	
            </form>
        </div>
   </div>
  
  );
};

export default Signup;
