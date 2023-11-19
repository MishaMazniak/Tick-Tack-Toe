import {createSlice} from "@reduxjs/toolkit"

export const dataSlice = createSlice({
  name: "dataUsers",
  initialState: {
    firstUser: {name: "", choice: "", winner: 0},
    secondUser: {name: "", choice: "", winner: 0},
    resetVic: true
  },
  reducers: {
    updateUserWinner: (state, action) => {
      state.firstUser.winner = action.payload.countFirstWinner
      state.secondUser.winner = action.payload.countSecondWinner
    },
    resetVic: (state, action) => {
      state.resetVic = action.payload.resetVic
    },
    addUsers: (state, action) => {
      state.firstUser.name = action.payload.firstUserName
      state.firstUser.choice = action.payload.firstUserChoice

      state.secondUser.name = action.payload.secondUserName
      state.secondUser.choice = action.payload.secondUserChoice
    }
  }
})

export const {updateUserWinner, resetVic, addUsers} = dataSlice.actions
export default dataSlice.reducer
