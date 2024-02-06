import Dice from "./Dice";
import "./css/Board.css";

function Board({ name, color, gameHistory, BoardWinner = "", className = "" }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  const classNames = `Board ${className} ${BoardWinner}`;

  //gameHistory 쪽 변경
  const renderGameHistory = () => (
    <p>
      {gameHistory.map((item, index) => (
        <span className="Board-history" key={index}>
          {item}
        </span>
      ))}
    </p>
  );

  return (
    <div className={classNames}>
      {/* props : 컴포넌트에 지정하는 속성
      숫자 지정 시 중괄호로 감싸줘야함 */}

      <div>
        <h2>{name}</h2>
        <Dice color={color} num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>
          <span>{renderGameHistory()}</span>
        </p>
      </div>
    </div>
  );
}

export default Board;
