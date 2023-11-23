import "./NavInfo.scss"
import {useSelector} from "react-redux"
import {useState, useEffect} from "react"

interface RootState {
  dataUsers: {
    firstUser: {name: string; choice: string}
    secondUser: {name: string; choice: string}
    switchStep: boolean
  }
}
function NavInfo() {
  let UsersData = useSelector((state: RootState) => state.dataUsers)

  const [stepStyleOne, setStepStyleOne] = useState("")
  const [stepStyleTwo, setStepStyleTwo] = useState("")

  useEffect(() => {
    if (UsersData.switchStep) {
      if (UsersData.firstUser.choice === "X") {
        setStepStyleOne("my-choice")
        setStepStyleTwo("")
      } else if (UsersData.secondUser.choice === "X") {
        setStepStyleOne("")
        setStepStyleTwo("my-choice")
      }
    } else {
      if (UsersData.firstUser.choice === "X") {
        setStepStyleOne("")
        setStepStyleTwo("my-choice")
      } else if (UsersData.secondUser.choice === "X") {
        setStepStyleOne("my-choice")
        setStepStyleTwo("")
      }
    }
  }, [UsersData.switchStep])
  return (
    <div className="my-header">
      <div className="navbar">
        <div className="first-user">
          <span>{UsersData.firstUser.name}</span>
          <span className={`btn btn-secondary mx-2 ${stepStyleOne}`}>
            {UsersData.firstUser.choice}
          </span>
        </div>
        <div className="second-user">
          <span className={`btn btn-secondary mx-2 ${stepStyleTwo}`}>
            {UsersData.secondUser.choice}
          </span>
          <span>{UsersData.secondUser.name}</span>
        </div>
      </div>
    </div>
  )
}
export default NavInfo
