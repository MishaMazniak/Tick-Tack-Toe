import "./NavInfo.scss"
import {useSelector} from "react-redux"

interface RootState {
  dataUsers: {
    firstUser: {name: string; choice: string}
    secondUser: {name: string; choice: string}
  }
}
function NavInfo() {
  let UsersData = useSelector((state: RootState) => state.dataUsers)
  return (
    <div className="my-header">
      <div className="navbar">
        <div className="first-user">
          <span>{UsersData.firstUser.name}</span>
          <span className="btn btn-secondary mx-2">
            {UsersData.firstUser.choice}
          </span>
        </div>
        <div className="second-user">
          <span className="btn btn-secondary mx-2 my-choice">
            {UsersData.secondUser.choice}
          </span>
          <span>{UsersData.secondUser.name}</span>
        </div>
      </div>
    </div>
  )
}
export default NavInfo
