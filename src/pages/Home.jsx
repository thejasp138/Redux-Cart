import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { fetchproductThank } from '../redux/slises/productSlice'
import { Spinner } from 'react-bootstrap'
import { addToWishLis } from '../redux/slises/wishlistSlice'
import { addToCart } from '../redux/slises/cartSlice'

function Home() {
    const dispatch=useDispatch()
    const {product,loading,error}=useSelector((state)=>state. productReducer)
     



    useEffect(()=>{
        dispatch(fetchproductThank())

    },[])
    // console.log(res)
  return (
    <>
      
      
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Redux Cart</h1>
                    <p class="lead fw-normal text-white-50 mb-0"></p>
                </div>
            </div>
        </header>
      
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        !loading&&error &&
                        <div className='text-danger display-4'>{error}</div>
            
                    }

                {
                    loading?

                    <div className='d-flex justify-content-center'> 
                        <Spinner
                            as="span"
                             animation="border"
                            size="xl"
                             role="status"
                            aria-hidden="true"
                        />
                            <h2 className='ms-2'>Loading....</h2>
                    </div>
                    : !error &&
                    product.map(item=>(


                    <div className="col mb-5">
                    <div className="card h-100">

                        <Link to={`/detail/${item?.id}`} >
                            <img className="card-img-top" height={'180px'} src={item?.thumbnail} alt="..." />
                            
                        </Link>
                      
              
                        <div className="card-body p-4">
                            <div className="text-center">
                       
                                <h5 className="fw-bolder">{item?.title}</h5>
                         
                                ₹ {item?.price} /-
                            </div>
                            <div className='d-flex justify-content-between'>
                              <button className='btn ' onClick={()=>{dispatch(addToWishLis(item))}}>
                          <i className="fa-solid fa-heart-circle-plus" style={{color:'#f03888'}} ></i>

                              </button>

                              <button className='btn ' onClick={()=>{dispatch(addToCart(item))}}>
                              <i className="fa-solid fa-cart-plus" style={{color:' #63E6BE'}}></i>

                              </button>

                            </div>
                        </div>
                   
                       
                    </div>
                </div>

                    ))
                    

                }




                    
                </div>
            </div>
        </section>

    </>
  )
}

export default Home