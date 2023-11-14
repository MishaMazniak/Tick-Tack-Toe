import "./Resoult.scss"
import {useSelector} from "react-redux"

interface UsersProps {
  changeScrin: () => void
}
interface RootState {
  dataUsers: {
    firstUserName: {firstUserName: string}
    secondUserName: {secondUserName: string}
    countFirstWinner: 0
    countSecondWinner: 0
  }
}
function Resoult(props: UsersProps) {
  let UsersData = useSelector((state: RootState) => state.dataUsers)
  console.log(UsersData)
  return (
    <div className="navbar my-resoult">
      <div className="navbar my-victory">
        <div className="me-2 user-name">
          <div className="d-flex justify-content-end">
            {UsersData.firstUserName.firstUserName}
          </div>
          <div className="d-flex justify-content-end">
            {UsersData.secondUserName.secondUserName}
          </div>
        </div>
        <div>
          <div>Victory</div>
          <div className="user-resoult">{UsersData.countFirstWinner}</div>
          <div className="user-resoult">{UsersData.countSecondWinner}</div>
          <div className="btn btn-primary mt-2">Reset</div>
        </div>
      </div>
      <div className="btn btn-danger me-5 my-exit" onClick={props.changeScrin}>
        EXIT
      </div>
    </div>
  )
}
export default Resoult
