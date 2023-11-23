import "./Bord.scss"
import {useState, useEffect} from "react"
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import {updateUserWinner, resetVic, switchStep} from "../../../redux/dataUsers"

function Bord() {
  const dispatch = useDispatch()

  interface RootState {
    dataUsers: {
      firstUser: {name: string; choice: string; winner: number}
      secondUser: {name: string; choice: string; winner: number}
      resetVic: boolean
    }
  }
  let UsersDataRedux = useSelector((state: RootState) => state.dataUsers)
  const resVic = UsersDataRedux.resetVic
  const [check, setcheck] = useState(true) //change "X" on "O" after clicked
  const [endGame, setEndGame] = useState(true) //locking the board after a winning combination

  // data for change value winner in function handleWinner
  const [reduxFirstWinner, setReduxFirstWinner] = useState(0)
  const [reduxSecondWinner, setReduxSecondWinner] = useState(0)
  // data section "X" or "O"
  const [oneOne, setOneOne] = useState("")
  const [oneTwo, setOneTwo] = useState("")
  const [oneThree, setOneThree] = useState("")

  const [twoOne, setTwoOne] = useState("")
  const [twoTwo, setTwoTwo] = useState("")
  const [twoThree, setTwoThree] = useState("")

  const [threeOne, setThreeOne] = useState("")
  const [threeTwo, setThreeTwo] = useState("")
  const [threeThree, setThreeThree] = useState("")
  // Add style green for winner line
  const [horTop, setHorTop] = useState("")
  const [horMid, setHorMid] = useState("")
  const [horBoot, setHorBoot] = useState("")
  const [vertLeft, setVertLeft] = useState("")
  const [vertMid, setVertMid] = useState("")
  const [vertRight, setVertRight] = useState("")
  const [bevRight, setBevRight] = useState("")
  const [bevLeft, setBevLeft] = useState("")
  // Add "X" or "O" after clicked on the section
  function presetPlace(idEl: string, elEmpti: string) {
    if (elEmpti === "") {
      if (endGame) {
        if (idEl === "section-1") check ? setOneOne("X") : setOneOne("O")
        else if (idEl === "section-2") check ? setOneTwo("X") : setOneTwo("O")
        else if (idEl === "section-3")
          check ? setOneThree("X") : setOneThree("O")
        else if (idEl === "section-4") check ? setTwoOne("X") : setTwoOne("O")
        else if (idEl === "section-5") check ? setTwoTwo("X") : setTwoTwo("O")
        else if (idEl === "section-6")
          check ? setTwoThree("X") : setTwoThree("O")
        else if (idEl === "section-7")
          check ? setThreeOne("X") : setThreeOne("O")
        else if (idEl === "section-8")
          check ? setThreeTwo("X") : setThreeTwo("O")
        else if (idEl === "section-9")
          check ? setThreeThree("X") : setThreeThree("O")
        setcheck(!check) //change step "X" on "O" and send in redux
        dispatch(
          switchStep({
            switchStep: check
          })
        )
      }
    }
  }
  // add victory for winner
  const handleWinner = (winner: string) => {
    switch (winner) {
      case "X":
        if (UsersDataRedux.firstUser.choice === "X" && endGame) {
          setReduxFirstWinner(reduxFirstWinner + 1)
          dispatch(
            updateUserWinner({
              countFirstWinner: reduxFirstWinner,
              countSecondWinner: reduxSecondWinner
            })
          )
        } else if (UsersDataRedux.secondUser.choice === "X" && endGame) {
          setReduxSecondWinner(reduxSecondWinner + 1)
          dispatch(
            updateUserWinner({
              countFirstWinner: reduxFirstWinner,
              countSecondWinner: reduxSecondWinner
            })
          )
        }
        break
      case "O":
        if (UsersDataRedux.firstUser.choice === "O" && endGame) {
          setReduxFirstWinner(reduxFirstWinner + 1)
          dispatch(
            updateUserWinner({
              countFirstWinner: reduxFirstWinner,
              countSecondWinner: reduxSecondWinner
            })
          )
        } else if (UsersDataRedux.secondUser.choice === "O" && endGame) {
          setReduxSecondWinner(reduxSecondWinner + 1)
          dispatch(
            updateUserWinner({
              countFirstWinner: reduxFirstWinner,
              countSecondWinner: reduxSecondWinner
            })
          )
        }
        break
    }
    dispatch(
      updateUserWinner({
        countFirstWinner: reduxFirstWinner,
        countSecondWinner: reduxSecondWinner
      })
    )
    setEndGame(false)
  }
  // check resoult
  useEffect(() => {
    let lines: Record<string, string[]> = {
      horTop: [oneOne, oneTwo, oneThree],
      horMid: [twoOne, twoTwo, twoThree],
      horBoot: [threeOne, threeTwo, threeThree],
      vertLeft: [oneOne, twoOne, threeOne],
      vertMid: [oneTwo, twoTwo, threeTwo],
      vertRight: [oneThree, twoThree, threeThree],
      bevRight: [oneOne, twoTwo, threeThree],
      bevLeft: [oneThree, twoTwo, threeOne]
    }
    for (let lineKey in lines) {
      const line = lines[lineKey] as string[]
      const [a, b, c] = line
      if (a === b && b === c) {
        let winner = a
        if (winner) {
          handleWinner(winner)
          switch (lineKey) {
            case "horTop":
              setHorTop("winner")
              break
            case "horMid":
              setHorMid("winner")
              break
            case "horBoot":
              setHorBoot("winner")
              break
            case "vertLeft":
              setVertLeft("winner")
              break
            case "vertMid":
              setVertMid("winner")
              break
            case "vertRight":
              setVertRight("winner")
              break
            case "bevRight":
              setBevRight("winner")
              break
            case "bevLeft":
              setBevLeft("winner")
              break
          }
        }
      }
    }
    // reset value Victory
    if (!resVic) {
      setReduxFirstWinner(0)
      setReduxSecondWinner(0)
      dispatch(resetVic({resetVic: true}))
    }
  }, [
    oneOne,
    oneTwo,
    oneThree,
    twoOne,
    twoTwo,
    twoThree,
    threeOne,
    threeTwo,
    threeThree,
    endGame,
    resVic
  ])
  // clear bord without "X" or "O"
  function newGame() {
    setOneOne("")
    setOneTwo("")
    setOneThree("")
    setTwoOne("")
    setTwoTwo("")
    setTwoThree("")
    setThreeOne("")
    setThreeTwo("")
    setThreeThree("")
    setcheck(true)
    setEndGame(true)
    dispatch(
      switchStep({
        switchStep: true
      })
    )
    // clear bord without styles "winner line"
    setHorTop("")
    setHorMid("")
    setHorBoot("")
    setVertLeft("")
    setVertMid("")
    setVertRight("")
    setBevRight("")
    setBevLeft("")
  }
  return (
    <div className="my-bord">
      <div className="btn btn-primary mb-3" onClick={newGame}>
        New Game
      </div>
      <div className="block-section">
        <div
          className={`section ${horTop} ${vertLeft} ${bevRight}`}
          id="section-1"
          onClick={(e) =>
            presetPlace((e.currentTarget as HTMLDivElement).id, oneOne)
          }
        >
          <h1 className="translate-middle">{oneOne}</h1>
        </div>
        <div
          className={`section ${horTop} ${vertMid}`}
          id="section-2"
          onClick={(e) =>
            presetPlace((e.currentTarget as HTMLDivElement).id, oneTwo)
          }
        >
          <h1 className="translate-middle">{oneTwo}</h1>
        </div>
        <div
          className={`section ${horTop} ${vertRight} ${bevLeft}`}
          id="section-3"
          onClick={(e) =>
            presetPlace((e.currentTarget as HTMLDivElement).id, oneThree)
          }
        >
          <h1 className="translate-middle">{oneThree}</h1>
        </div>
      </div>
      <div className="block-section">
        <div
          className={`section ${horMid} ${vertLeft}`}
          id="section-4"
          onClick={(e) =>
            presetPlace((e.currentTarget as HTMLDivElement).id, twoOne)
          }
        >
          <h1 className="translate-middle">{twoOne}</h1>
        </div>
        <div
          className={`section ${horMid} ${vertMid} ${bevRight} ${bevLeft}`}
          id="section-5"
          onClick={(e) =>
            presetPlace((e.currentTarget as HTMLDivElement).id, twoTwo)
          }
        >
          <h1 className="translate-middle">{twoTwo}</h1>
        </div>
        <div
          className={`section ${horMid} ${vertRight}`}
          id="section-6"
          onClick={(e) =>
            presetPlace((e.currentTarget as HTMLDivElement).id, twoThree)
          }
        >
          <h1 className="translate-middle">{twoThree}</h1>
        </div>
      </div>
      <div className="block-section">
        <div
          className={`section ${horBoot} ${vertLeft} ${bevLeft}`}
          id="section-7"
          onClick={(e) =>
            presetPlace((e.currentTarget as HTMLDivElement).id, threeOne)
          }
        >
          <h1 className="translate-middle">{threeOne}</h1>
        </div>
        <div
          className={`section ${horBoot} ${vertMid}`}
          id="section-8"
          onClick={(e) =>
            presetPlace((e.currentTarget as HTMLDivElement).id, threeTwo)
          }
        >
          <h1 className="translate-middle">{threeTwo}</h1>
        </div>
        <div
          className={`section ${horBoot} ${bevRight} ${vertRight}`}
          id="section-9"
          onClick={(e) =>
            presetPlace((e.currentTarget as HTMLDivElement).id, threeThree)
          }
        >
          <h1 className="translate-middle">{threeThree}</h1>
        </div>
      </div>
    </div>
  )
}
export default Bord
