import "./Users.scss"
import {useDispatch} from "react-redux"
import {addUsers} from "../redux/dataUsers"
import {useState} from "react"

interface UsersProps {
  changeScrin: () => void
}

function Users(props: UsersProps) {
  const dispatch = useDispatch()

  // Button "X" and "O" (add style "select-char" (background - green))
  const [styleFirstGroup, setStyleFirstGroup] = useState("")
  const [styleSecondGroup, setStyleSecondGroup] = useState("")
  const [selectOn, setSelectOn] = useState(false) // button click test
  // date users for write in redux
  // name users
  const [firstUserName, setFirstUserName] = useState("")
  const [secondUserName, setSecondUserName] = useState("")
  // choice char users
  const [firstUserChoice, setFirstUserChoice] = useState("")
  const [secondUserChoice, setSecondUserChoice] = useState("")
  // Button "X" and "O" (save choice users "x"/"o" and change style)
  function userChoice(el: string) {
    setSelectOn(true)
    if (el === "firstX" || el === "secondO") {
      setFirstUserChoice("X")
      setSecondUserChoice("O")
      setStyleSecondGroup("")
      setStyleFirstGroup("select-char")
    } else if (el === "firstO" || el === "secondX") {
      setFirstUserChoice("O")
      setSecondUserChoice("X")
      setStyleFirstGroup("")
      setStyleSecondGroup("select-char")
    } else setFirstUserChoice("not choice")
  }
  //submit form
  function addDateUsers(e: React.FormEvent) {
    e.preventDefault()
    // Add users in redux
    if (!selectOn) {
      alert("Choice X or O")
    } else {
      dispatch(
        addUsers({
          firstUserName: firstUserName,
          secondUserName: secondUserName,
          firstUserChoice: firstUserChoice,
          secondUserChoice: secondUserChoice
        })
      )
      props.changeScrin()
      // Clear inputs
      setFirstUserName("")
      setSecondUserName("")
      // Clear button "X"/"O" style
      setStyleSecondGroup("")
      setStyleFirstGroup("")
      setSelectOn(false)
    }
  }

  return (
    <div className="container text-center">
      <h1>Noughts && Crosses</h1>
      <form className="my-form" onSubmit={addDateUsers}>
        <div className="input-group my-2">
          <input
            className="form-control"
            type="text"
            placeholder="First user"
            value={firstUserName}
            onChange={(e) => setFirstUserName(e.target.value)}
            required
          ></input>
          <button
            className={`btn btn-secondary ms-2 ${styleFirstGroup}`}
            type="button"
            value="firstX"
            onClick={(e) => userChoice((e.target as HTMLButtonElement).value)}
          >
            X
          </button>
          <button
            className={`btn btn-secondary ms-2 ${styleSecondGroup}`}
            type="button"
            value="firstO"
            onClick={(e) => userChoice((e.target as HTMLButtonElement).value)}
          >
            O
          </button>
        </div>
        <div className="input-group my-2">
          <input
            className="form-control"
            type="text"
            placeholder="Second user"
            value={secondUserName}
            onChange={(e) => setSecondUserName(e.target.value)}
            required
          ></input>
          <button
            className={`btn btn-secondary ms-2 ${styleSecondGroup}`}
            type="button"
            value="secondX"
            onClick={(e) => userChoice((e.target as HTMLButtonElement).value)}
          >
            X
          </button>
          <button
            className={`btn btn-secondary ms-2 ${styleFirstGroup}`}
            type="button"
            value="secondO"
            onClick={(e) => userChoice((e.target as HTMLButtonElement).value)}
          >
            O
          </button>
        </div>
        <button className="btn btn-success" type="submit">
          Start
        </button>
      </form>
    </div>
  )
}

export default Users
