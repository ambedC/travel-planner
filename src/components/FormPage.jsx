import React from "react";

export default function FormPage(props){
    return (
           <div className='container'>
              <div className='loginP'>
                 <form className='login-form'>
                    <h1>{props.header}</h1>
    
                    <div className='form-group'>
                       <input type='text' placeholder='Email/Username'/>
                    </div>
    
                    <div className='form-group'>
                       <input type='password' placeholder='Password'/>  
                    </div>

                    <div className='form-group'>
                       {props.sign && <input type='password' placeholder='Re-Enter Password'/>}  
                    </div>

                    <div className='form-check-group'>
                       <input type='checkbox'/>
                       <a className="log-check" href="#">{props.cText}</a>
                       {props.login && <a className="log-forgot" href="#">Forgot Password?</a>}
                    </div>

                        
                    <button className='login-btn' type='submit'>{props.buttonName}</button>   
                    <a className="nav-link" href="#">{props.lastLine}</a>      
                 </form>
              </div>
           </div>
      );
}