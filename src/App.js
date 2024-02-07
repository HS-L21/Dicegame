import Board from "./Board";
import Button from "./Button";
import { useState } from "react";
import "./css/App.css";
import logo from "./assets/logo.png";

function randomDiceNumber(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  //내 주사위 값
  const [myHistory, setMyHistory] = useState([]); //나왔던 주사위의 기록
  const [myWin, setmyWin] = useState("");

  //상대방 주사위 값
  const [otherHistory, setOhterHistory] = useState([]); //나왔던 주사위의 기록
  const [otherWin, setOtherWin] = useState("");

  const handleRollClick = () => {
    const nextMyNum = randomDiceNumber(6);
    const nextOtherNum = randomDiceNumber(6);

    //주사위 기록 -> 배열은 참조형 (주소값 참조) -> 전체를 새로 만든다고 생각해야함
    setMyHistory([...myHistory, nextMyNum]);
    setOhterHistory([...otherHistory, nextOtherNum]);

    const updatedMyHistory = [...myHistory, nextMyNum];
    const updatedOtherHistory = [...otherHistory, nextOtherNum];

    if (updatedMyHistory.length < 5) {
      if (nextMyNum > nextOtherNum) {
        setmyWin("Board-winner");
        setOtherWin("");
      } else if (nextMyNum < nextOtherNum) {
        setOtherWin("Board-winner");
        setmyWin("");
      } else {
        setmyWin("");
        setOtherWin("");
      }
    } else {
      const mySum = updatedMyHistory.reduce((a, b) => a + b, 0);
      const otherSum = updatedOtherHistory.reduce((a, b) => a + b, 0);

      if (mySum > otherSum) {
        setmyWin("Board-winner");
        setOtherWin("");
      } else if (mySum < otherSum) {
        setOtherWin("Board-winner");
        setmyWin("");
      }
    }
  };

  const handleClearClick = () => {
    //나
    setMyHistory([]);
    //상대방
    setOhterHistory([]);
    setmyWin("");
    setOtherWin("");
  };

  //5번만 하고 싶음! -> 5번 후에는 무조건 처음부터 돌아가게!
  //5회 때 가장 큰 값을 가진 사람에게 board-winner를 주자
  //5번만 주사위를 돌렸을 때 총합이 가장 큰 사람에게 WIN 이라는 글자를 넣어주자

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="주사위게임 로고" />
      <h1 className="App-title">주사위 게임</h1>
      <div>
        {myHistory.length < 5 && (
          <Button className="App-button" color="blue" onClick={handleRollClick}>
            던지기
          </Button>
        )}
        <Button className="App-button" color="red" onClick={handleClearClick}>
          처음부터
        </Button>
      </div>
      <div className="App-boards">
        <Board
          className="App-board"
          name="나"
          color="blue"
          gameHistory={myHistory}
          BoardWinner={myWin}
        />
        <Board
          className="App-board"
          name="상대방"
          color="red"
          gameHistory={otherHistory}
          BoardWinner={otherWin}
        />
      </div>
    </div>
  );
}

export default App;
