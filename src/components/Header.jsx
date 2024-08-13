import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

import { Link} from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { searchProduct } from '../redux/slises/productSlice';




function Header() {
  const {wishlist}=useSelector(state=>state.wishlistReducer)
  const cart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  
  return (
    <>
     <Navbar expand="lg" className='bg-light' >
      <Container>
        <Navbar.Brand >
        <Link to={'/'} className='text-decoration-none text-dark'>
            <i className="fa-solid fa-cart-shopping me-2" style={{color:'#000000'}}></i>
            ReduxCart
        
        </Link>
           
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <Nav.Link className='boeder me-3' style={{height:'fit-content'}}  >
                    <input  type="text" style={{height:'fit-content'}}  onChange={(e)=>{dispatch(searchProduct(e.target.value.toLowerCase()))}}  className='form-control' placeholder='Search' />
            </Nav.Link>

            <Nav.Link className='btn  border-dark me-3' style={{height:'fit-content'}}>
              <Link to={'/wish'} className='text-decoration-none text-dark'>
                <i class="fa-solid fa-heart me-1" style={{color:'#e1146d'} } ></i>
                WishList
                <Badge bg="danger" className='ms-1' >{wishlist?.length} </Badge>
              </Link>
            </Nav.Link>
            <Nav.Link className='btn  border-dark  me-3' style={{height:'fit-content'}}>
              <Link to={'/Cart'} className='text-decoration-none text-dark'>
                <i className="fa-solid fa-cart-shopping me-1" style={{color:'#63E6BE'}}></i>
                Cart
                <Badge bg="danger" className='ms-1' >{cart?.length} </Badge>

                </Link>
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header