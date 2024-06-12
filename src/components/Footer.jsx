import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
         <div>
          <div className=' d-flex justify-content-between  text-white ' style={{backgroundColor:'gray'}} >
            <div className='w-25'>

              <h3>ReduxCart 2024</h3>
              <p style={{textAlign:'justify'}}> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled i </p>

            </div>
            <div className='w-25 text-center'>
              <h3>Link</h3>
              <Link to={'/wish'} className='d-block mb-3 mt-3'>WishList</Link>
              <Link to={'/cart'}>Cart</Link>

            </div>
            <div className='w-25'>
              <h3>Reference</h3>
              <a href="https://react-bootstrap.netlify.app/"className='d-block text-light mb-3 mt-3' >React Bootstrap</a>
              <a href="https://react.dev/" className='d-block text-light mb-3 mt-3' >React</a>
              <a href="https://react-redux.js.org/" className='text-light'>Redux</a>
            </div>
            <div className='w-25'>
              <h3>Contact Us</h3>
              <p>Submit your email,so we can contact you....</p>
              <input type="email" className='form-control text-light ' placeholder='Enter Email Id' />
              <button className='btn btn-outline-light mt-3'> Submit</button>
            </div>


          </div>
          <h6 className='text-center'>ReaduxCart 2024 &copy; All right resived</h6>

         </div>
    </>
   
  )
}

export default Footer