import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name : 'notification',
    initialState : {current : 'none'},
    reducers : {
        updateNotification(state,action){
            state.current = action.payload
        }
    }
})

export default notificationSlice.reducer
export const notificationAction = notificationSlice.actions