import mailSlice from "../features/mailSlice";

const { configureStore } = require("@reduxjs/toolkit");

export default configureStore = () => {
    reducer: {
        counter : mailSlice
    }
}