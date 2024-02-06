import diceBlue01 from "./assets/dice-blue-1.svg";
import diceBlue02 from "./assets/dice-blue-2.svg";
import diceBlue03 from "./assets/dice-blue-3.svg";
import diceBlue04 from "./assets/dice-blue-4.svg";
import diceBlue05 from "./assets/dice-blue-5.svg";
import diceBlue06 from "./assets/dice-blue-6.svg";
import diceRed01 from "./assets/dice-red-1.svg";
import diceRed02 from "./assets/dice-red-2.svg";
import diceRed03 from "./assets/dice-red-3.svg";
import diceRed04 from "./assets/dice-red-4.svg";
import diceRed05 from "./assets/dice-red-5.svg";
import diceRed06 from "./assets/dice-red-6.svg";
import "./css/Dice.css";

const DICE_IMAGES = {
  blue: {
    1: diceBlue01,
    2: diceBlue02,
    3: diceBlue03,
    4: diceBlue04,
    5: diceBlue05,
    6: diceBlue06,
  },
  red: {
    1: diceRed01,
    2: diceRed02,
    3: diceRed03,
    4: diceRed04,
    5: diceRed05,
    6: diceRed06,
  },
};

function Dice({ color = "blue", num = 1 }) {
  const src = DICE_IMAGES[color][num];
  const alt = `${color} ${num}`;
  return <img src={src} alt={alt} />;
}

export default Dice;
