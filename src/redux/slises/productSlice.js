import { createSlice,createAsyncThunk, isRejected } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchproductThank=createAsyncThunk('products/fetchproductThank',async()=>{
    const response=await axios.get("https://dummyjson.com/products")
    localStorage.setItem("response",JSON.stringify(response.data.products))
    return response.data.products

})


const productSlice=createSlice({
    name:'products',
    initialState:{
        product:[],
        loading:false,
        productcontainer:[],
        error:''
    },
    reducers:{
        searchProduct:(state,action)=>{
           state.product=state.productcontainer.filter(item=>item.title.toLowerCase().includes(action.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchproductThank.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(fetchproductThank.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
            state.productcontainer=action.payload
        })
        builder.addCase(fetchproductThank.rejected,(state,action)=>{
            state.loading=false
            state.product=[],
            state.error="Request faild"
        })
    }
})

export const {searchProduct}=productSlice.actions
export default productSlice.reducer