import "./App.css"
import Users from "./components/Users"
import BordPlay from "./components/BordPlay/BordPlay"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {updateUserWinner} from "./redux/dataUsers"

function App() {
  const dispatch = useDispatch()

  const [startGame, setStartGame] = useState(false)

  function changeScrin() {
    setStartGame(!startGame)
    dispatch(
      updateUserWinner({
        countFirstWinner: 0,
        countSecondWinner: 0
      })
    )
  }
  return (
    <div>
      {!startGame ? (
        <Users changeScrin={changeScrin}></Users>
      ) : (
        <BordPlay changeScrin={changeScrin}></BordPlay>
      )}
    </div>
  )
}

export default App
