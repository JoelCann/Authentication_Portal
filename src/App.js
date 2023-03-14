
import './App.css';
import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import swal from 'sweetalert';
import pebels2 from './pebels2.png'



function App() {

  const[email,setEmail]=useState('')
  const[password, setPassword]=useState('')

  const validateSubmit=(e)=> {
    e.preventDefault()
    if (email === "react@gmail.com"  &&  password === "beans1")
      swal('Successful login', 'Welcome to the a new dispensation', 'success')
     
    else 
    
        swal('Login Unsuccessful', 'Wrong Credentials, Please try again', 'error' )
        
  }


  return (
    <div className="App-header">
      <h1 style={{fontWeight:800, color:"black"}}>Authentication Portal</h1>
      
      <div className='container'>
          <div className='row'>
            <div className='col-md-6  rounded shadow-5-strong' style={{marginRight:-35, zIndex:2, }}>
              <img className='float-md-right float-end '  src={pebels2}   width='418'/>
            </div>
                  <div className='col-md-6 my-auto bg-white p-5 '  style={{borderBottomRightRadius:30, width:430, borderTopRightRadius:30 }} >
                  <div className=' float-end' style={{height:"350px", width:"150", marginLeft:-20}}>
                    <h3 style={{ color:"black", fontSize: 20}}>Login</h3>
                    <h1 style={{fontWeight:700, fontSize: 30, color:"black"}}>Input your Credentials</h1>
                    <form onSubmit={validateSubmit}>
                        <div className="mb-3 " style={{color:"black"}}>
                          <label className="form-label " style={{fontSize: 17}}>Email address</label>
                          <input type="email" className="form-control"  placeholder='Input email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>

                        <div className="mb-3 " style={{color:"black"}}>
                          <label className="form-label" style={{fontSize: 17}}>Password</label>
                          <input type="password" className="form-control" placeholder='Input Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>
                  </div>
                </div>
            

          </div>
      </div>
      
      
    </div>
  );
}

export default App;
