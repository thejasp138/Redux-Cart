import React from 'react'
import { Row,Col,Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishList } from '../redux/slises/wishlistSlice'


function Wishlist() {

  const {wishlist}=useSelector((state)=>state.wishlistReducer)
  console.log(wishlist)
  const dispatch=useDispatch()
  return (
    <>
     <div className='container p-5'>
      <Row>
        {
          wishlist?.length >0?
          wishlist?.map(item=>(
            <Col sm={12} md={6} lg={4} xl={2}>
          <Card  >
            <Card.Img src={item?.thumbnail} height={'200px'}></Card.Img>
            <Card.Body>

              <Card.Title>{item?.title.slice(0-10)}...</Card.Title>
              <Card.Text> {item.price} </Card.Text>
              <div className='d-flex justify-content-between'>
                <button className='btn  border' onClick={()=>{dispatch(removeFromWishList(item?.id))}}>
                <i className="fa-solid fa-heart-circle-xmark" style={{color: "#f014b5",}} ></i>

                </button>
                <button className='btn border'>
                <i className="fa-solid fa-cart-plus" style={{color:' #63E6BE'}}></i>

                   
                </button>

              </div>
            </Card.Body>
          </Card>
        </Col>

          ))
          :
          <h1>No Wishlist items...</h1>
        }
        
      </Row>

     </div>
    </>
  )
}

export default Wishlist