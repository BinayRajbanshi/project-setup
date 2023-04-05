import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { cartItemT } from '@/app/types/types';

interface initialStateT {
    isLoading:boolean
    cartItems:cartItemT[]
    message:string
}
const initialState:initialStateT = {
    isLoading:false,
    cartItems:[],
    message:""
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state, action)=>{
            state.cartItems = []
        },
        addToCart:(state, action)=>{
            const itemExists = state.cartItems.find((item)=>item.name==action.payload.name)
            if(!itemExists){
                state.cartItems.push(action.payload)
            }else{
                state.message="Item already Exists in cart"
            }
        },
        removeFromCart:(state,action)=>{
            state.cartItems = state.cartItems.filter((item)=>item._id != action.payload)
        }
    }
})

export const {clearCart, addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer