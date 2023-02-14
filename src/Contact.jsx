import React, { useState } from 'react';
import './App.css';

const Contact = () => {

  var [data, setData] = useState({
    fname: '',
    phone: '',
    email: '',
    message: ''
  })

  const inEve = (event) => {
    var { name, value } = event.target

    setData((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert('Submitted successfully')
  }
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name='fname' value={data.fname} onChange={inEve} placeholder="Enter your name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone no.</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={inEve} placeholder="Enter phone no." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={inEve} placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" name='message' value={data.message} onChange={inEve} rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
