import Dice from "./Dice";
import "./css/Board.css";

function Board({ name, color, gameHistory, BoardWinner = "", className = "" }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  const classNames = `Board ${className} ${BoardWinner}`;

  const renderGameHistory = () => (
    <p>
      {gameHistory.map((item, index) => (
        <span className="Board-history" key={index}>
          {item}
        </span>
      ))}
    </p>
  );

  const finalWin = () => (
    <span className="Board-win-span">
      {BoardWinner !== "" && gameHistory.length === 5 && (
        <span className="">WIN</span>
      )}
      {BoardWinner === "" && gameHistory.length === 5 && (
        <span className="Board-lose-span">LOSE</span>
      )}
    </span>
  );

  return (
    <div className={classNames}>
      <div>
        <h2>{name}</h2>
        <Dice color={color} num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        {renderGameHistory()}
        <div className="Board-final">{finalWin()}</div>
      </div>
    </div>
  );
}

export default Board;
