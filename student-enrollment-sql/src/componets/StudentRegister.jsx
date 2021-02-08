import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import axios from  'axios'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default function StudentRegister() {

    const [name,setname] = useState();
    const [lastname,setlastname] = useState();
    const [email,setemail] = useState();
    const [nic,setnic] = useState();
    const [mobile,setmobile] = useState();



    const submit = async(e) =>{

          e.preventDefault();
        const Users  = {

            name,
            lastname,
            email,
            nic,
            mobile}

       await axios.post('http://localhost:4000/student/add',Users).then(res =>{

        console.log('added')
        console.log(res.data)
        }).catch(err=>{
            console.log(err)
        
        })


          window.location ='./'


    }

return (
    <div>
        <br>
        </br>
        
        <center>
     
<div class="card" style={{width:'40rem',top:'4rem'}}>
  <div class="card-body">
 
<h1>student Profile</h1>
<form onSubmit ={submit}>
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form6Example1"  placeholder="firstname" onChange={e =>{
                  setname(e.target.value)
              }}className="form-control" />
          
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form6Example2"   placeholder="lastname" onChange={e =>{
                  setlastname(e.target.value)
              }}className="form-control" />
           
            </div>
          </div>
        </div>
    
        {/* Text input */}

        {/* Email input */}
        <div className="form-outline mb-4">
          <input type="email" id="form6Example5"   placeholder="email" onChange={e =>{
                  setemail(e.target.value)
              }}className="form-control" />
         
        </div>
        <div className="form-outline mb-4">
          <input type="number" id="form6Example6"  placeholder="nic"onChange={e =>{
              setnic(e.target.value)
          }} className="form-control" />
  
        </div>
        
        {/* Number input */}
        <div className="form-outline mb-4">
          <input type="number" id="form6Example6"  onChange={e =>{
                  setmobile(e.target.value)
              }}  placeholder="mobile" className="form-control" />
        </div>
        {/* Message input */}
        {/* Checkbox */}
        
        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-block mb-4">submit</button>
      </form>
  </div>
</div>
</center>
  
      

  </div>



    )
}
