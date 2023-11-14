import "./BordPlay.scss"
import NavInfo from "./NavInfo/NavInfo"
import Bord from "./Bord/Bord"
import Resoult from "./Resoult/Resoult"

interface UsersProps {
  changeScrin: () => void
}

function BordPlay(props: UsersProps) {
  return (
    <div className="container text-center my-bord-wraper">
      <h1>Tick-Tack-Toe</h1>
      <NavInfo></NavInfo>
      <Bord></Bord>
      <Resoult changeScrin={props.changeScrin}></Resoult>
    </div>
  )
}

export default BordPlay
