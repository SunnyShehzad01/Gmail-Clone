import mailReducer from "../features/mailSlice";

const { configureStore } = require("@reduxjs/toolkit");

export default configureStore = () => {
    reducer: {
        mail : mailReducer
    }
}