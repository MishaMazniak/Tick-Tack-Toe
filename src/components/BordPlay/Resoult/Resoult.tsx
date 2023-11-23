import "./Resoult.scss"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {updateUserWinner, resetVic} from "../../../redux/dataUsers"

interface UsersProps {
  changeScrin: () => void
}
interface RootState {
  dataUsers: {
    firstUser: {name: string; choice: string; winner: number}
    secondUser: {name: string; choice: string; winner: number}
    resetVic: boolean
  }
}
function Resoult(props: UsersProps) {
  const dispatch = useDispatch()

  let UsersData = useSelector((state: RootState) => state.dataUsers)

  function resetVictory() {
    dispatch(
      updateUserWinner({
        countFirstWinner: 0,
        countSecondWinner: 0
      })
    )
    dispatch(resetVic({resetVic: false}))
  }
  return (
    <div className="navbar my-resoult">
      <div className="navbar my-victory">
        <div className="me-2 user-name">
          <div className="d-flex justify-content-end">
            {UsersData.firstUser.name}
          </div>
          <div className="d-flex justify-content-end">
            {UsersData.secondUser.name}
          </div>
        </div>
        <div>
          <div>Victory</div>
          <div className="user-resoult">
            {UsersData.firstUser.choice} - {UsersData.firstUser.winner}
          </div>
          <div className="user-resoult">
            {UsersData.secondUser.choice} - {UsersData.secondUser.winner}
          </div>
          <div className="btn btn-primary mt-2" onClick={resetVictory}>
            Reset
          </div>
        </div>
      </div>
      <div className="btn btn-danger me-5 my-exit" onClick={props.changeScrin}>
        EXIT
      </div>
    </div>
  )
}
export default Resoult
