import {createSlice} from "@reduxjs/toolkit"

export const dataSlice = createSlice({
  name: "dataUsers",
  initialState: {
    firstUserName: "",
    secondUserName: "",
    firstUserChoice: "",
    secondUserChoice: "",
    countFirstWinner: 0,
    countSecondWinner: 0
  },
  reducers: {
    addUsers: (state, action) => {
      state.firstUserName = action.payload.firstUserName
      state.secondUserName = action.payload.secondUserName
      state.firstUserChoice = action.payload.firstUserChoice
      state.secondUserChoice = action.payload.secondUserChoice
      state.countFirstWinner = action.payload.countFirstWinner
      state.countSecondWinner = action.payload.countSecondWinner
    }
  }
})

export const {addUsers} = dataSlice.actions
export default dataSlice.reducer
