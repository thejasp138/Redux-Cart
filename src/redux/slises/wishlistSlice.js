import { createSlice } from "@reduxjs/toolkit";


const wishSlice=createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers:{
        addToWishLis:(state,action)=>{
            const existingProduct=state.wishlist.find(item=>item.id==action.payload.id)
            if(existingProduct){
                alert("aleredy added wishlist")
            }
            else{
                state.wishlist.push(action.payload)
                alert("successfully added wishlist")

            }
            
        },
        removeFromWishList:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishLis,removeFromWishList}=wishSlice.actions
export default wishSlice.reducer
