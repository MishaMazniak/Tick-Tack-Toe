import "./NavInfo.scss"
import {useSelector} from "react-redux"

interface RootState {
  dataUsers: {
    firstUserName: {firstUserName: string}
    secondUserName: {secondUserName: string}
    firstUserChoice: {firstUserChoice: string}
    secondUserChoice: {secondUserChoice: string}
  }
}

function NavInfo() {
  let UsersData = useSelector((state: RootState) => state.dataUsers)
  return (
    <div className="my-header">
      <div className="navbar">
        <div className="first-user">
          <span>{UsersData.firstUserName.firstUserName}</span>
          <span className="btn btn-secondary mx-2">
            {UsersData.firstUserChoice.firstUserChoice}
          </span>
        </div>
        <div className="second-user">
          <span className="btn btn-secondary mx-2 my-choice">
            {UsersData.secondUserChoice.secondUserChoice}
          </span>
          <span>{UsersData.secondUserName.secondUserName}</span>
        </div>
      </div>
    </div>
  )
}
export default NavInfo
