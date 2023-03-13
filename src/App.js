import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import login from './login.svg'


function App() {

  const[email,setEmail]=useState('')
  const[password, setPassword]=useState('')

  const validateSubmit=(e)=> {
    
    if (email === "Omaya43@gmail.com"  &&  password === "beans1")
      alert('Successful login')
     
    else 
    e.preventDefault()
        alert('Invalid Credentials')
        e.preventDefault()
  }


  return (
    <div className="App-header">
      <h1>Authentication Portal</h1>
      
      <div className='container'>
          <div className='row'>
            <div className='col-md-6  '>
              <img className='float-md-right float-end p-5'  src={login}   width='400'/>
            </div>
            <div className='col-md-6 my-auto bg-dark p-5 w-25 rounded '>
              <form onSubmit={validateSubmit}>
                  <div className="mb-3 ">
                    <label className="form-label " >Email address</label>
                    <input type="email" className="form-control" placeholder='Input email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </div>

                  <div className="mb-3 ">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder='Input Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                  </div>
                  <button type="submit" className="btn btn-primary" >Submit</button>
              </form>
            </div>

          </div>
      </div>
      
      
    </div>
  );
}

export default App;
