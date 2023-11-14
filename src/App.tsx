import "./App.css"
import Users from "./components/Users"
import BordPlay from "./components/BordPlay/BordPlay"
import {useState} from "react"

function App() {
  const [startGame, setStartGame] = useState(false)

  function changeScrin() {
    setStartGame(!startGame)
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
