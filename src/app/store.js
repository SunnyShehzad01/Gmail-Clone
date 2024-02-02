const { configureStore } = require("@reduxjs/toolkit");

export default configureStore = () => {
    reducer: {
        counter : counterReducer
    }
}