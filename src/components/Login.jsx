import React, { useRef, useState } from 'react';
import loginimg from '../image/login.png'
export default function Login() {
    const[isvisible,setvisible]=useState("true");
    const modaldisplay=()=>{
    setvisible(!isvisible);
    window. location. reload(); 
    }
  return (
 <>
<div class={`modal ${isvisible=="true"?"fade":"d-none"}`} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <button type="button" class="close"  data-dismiss="modal" onClick={modaldisplay} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className='container d-flex justify-content-md-center align-items-center vh-100'>
        <div className='card shadow border-0 rounded-5 d-flex justify-content-center align-items-center' style={{width:"800px"}}  >
          <p className='text-success text-center pt-3 pb-4 ' >Let's learn, share & insipre each other with our passion for computer engineering. signup now</p>
          <div className='d-flex p-2 justify-content-between'>
            <h4>Create Account</h4>
            <p>Already have an account? <a href='#'>sign in</a></p>
          </div>
          <div className='row'>
            <div className='col-md-7 col-lg-7 col-12'>

            <form className='m-3'>
    <div class="row">
        <div class="form-group col-md-6 col-lg-6 col-12">
        <input type="text" class="form-control rounded-0" placeholder="FirstName"/>
        </div>
        <div class="form-group col-md-6 col-lg-6 col-12">
        <input type="text" class="form-control rounded-0" placeholder="LastName"/>
        </div>
    </div>
    <div class="form-group">
        <input type="email" class="form-control rounded-0"  placeholder="Email"/>
    </div>
    <div class="form-group">
        <input type="password" class="form-control rounded-0" placeholder="password"/>
    </div>
    <div class="form-group">
        <input type="password" class="form-control rounded-0" placeholder="confirm password"/>
    </div>

    <button type="submit" class="btn btn-primary  btn-block rounded-0 my-2 rounded-pill ">Create Account</button>

    </form>
    <div>
        <div className='row mx-5 my-2'>
        <span className='border border-1 p-2 px-5 col-lg-10 col-md-10 col-10 my-2'><i class="fa-brands fa-facebook text-primary"></i> Sign up with Facebook</span>

        <span className='border border-1 p-2 px-5 col-lg-10 col-md-10 col-10'><i class="fa-brands fa-google"></i> Sign up with Facebook</span>
        </div>
    </div>
            </div>
                <div className='col-md-4 col-lg-4 col-12'>
                <img src={loginimg}  className='col-12 col-lg-12 col-md-12'/>
                <p  className="pt-3" style={{fontSize:"9px"}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
            </div>
            </div>   
        </div>
</div>

</>
  )
}
