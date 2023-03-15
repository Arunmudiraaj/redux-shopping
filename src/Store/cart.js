import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        showCart : false,
        items : [],
    },
    reducers : {
        initializeCart(state, action){
            state.items = action.payload
        },
        toggleCart(state){
            state.showCart = !state.showCart
        },
        addItem(state, action){
            const reqIndex = state.items.findIndex((item)=>item.title===action.payload.title)
            if (reqIndex===-1){
                state.items.push({
                    title : action.payload.title,
                    quantity : 1,
                    total : action.payload.price,
                    price : action.payload.price
                })
            }
            else{
                state.items[reqIndex].quantity++
                state.items[reqIndex].total+=action.payload.price
            }
        },
        removeItem(state, action){
            const reqIndex = state.items.findIndex((item)=>item.title===action.payload)
            if (reqIndex!==-1){
                if (state.items[reqIndex].quantity===1){
                    state.items.splice(reqIndex,1)
                }
                else{
                    state.items[reqIndex].quantity--
                    state.items[reqIndex].total-=state.items[reqIndex].price
                }
            }
        }
    }
})

export default cartSlice.reducer
export const cartActions = cartSlice.actions