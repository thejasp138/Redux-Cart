import React,{useState,useEffect} from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart} from '../redux/slises/cartSlice'
import { addToWishLis } from '../redux/slises/wishlistSlice'




function Details() {
  const [data,setData]=useState([])
  const {id}=useParams()
  const dispatch=useDispatch()


  useEffect(()=>{
    console.log(id)
    setData(JSON.parse(localStorage.getItem("response")).find(item=>item.id==id))

  },[])
  console.log(data)
  return (
    <>
      <div className='p-5 container'>
        <Row>
          <Col sm={12} md={6} lg={6}   >
             <img className=" img-fluid  " style={{height:'550px'}}  src={data?.thumbnail } alt="img" />


          </Col>
          <Col sm={12} md={6} lg={6 } className='p-5 '>

            <div className='mb-3'>Prouct ID:{data?.id}</div>
            <h1 className='mb-1'>{data?.title}</h1>
            <div className='mb-3'>
              <span>₹ {data?.price}/-</span>
              <p>{data?.brand}</p>
            </div>
            <p  style={{textAlign:'justify'}}> {data?.description}.</p>
            <div className='d-flex justify-content-between'>
              <button className='btn btn-lg border' onClick={()=>{dispatch(addToWishLis(data))}}>
              <i className="fa-solid fa-heart-circle-plus" style={{color:'#f03888'}}></i>

              </button>
              <button className='btn btn-lg border' onClick={()=>{dispatch(addToCart(data))}}>
              <i className="fa-solid fa-cart-plus" style={{color:' #63E6BE'}}></i>

              </button>
            </div>
          </Col>


        </Row>

      </div>
    </>
  )
}

export default Details