import {configureStore} from "@reduxjs/toolkit"
import dataReducer from "./dataUsers.tsx"

export default configureStore({
  reducer: {
    dataUsers: dataReducer
  }
})
