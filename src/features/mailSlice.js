import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice ({
    name: "mail",
    initialState: {
        value: 0
    },
    reducers: {

    }
})

export const {} = mailSlice.actions

export const selectMail = state => state.mail.value
export default mailSlice.reducer