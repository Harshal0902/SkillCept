import { useEffect, useState } from "react";
import Square from "../../components/square";
import de from '../../locales/de/translationDe.json'
import en from '../../locales/en/translationEn.json';
import fr from '../../locales/fr/translationFr.json';
import hi from '../../locales/hi/translationHi.json';
import ja from '../../locales/ja/translationJa.json';
import ru from '../../locales/ru/translationRu.json';
import { useRouter } from 'next/router';

const locales = { en, de, fr, hi, ja, ru };

type Player = "X" | "O" | "BOTH" | null;

function calculateWinner(squares: Player[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function TicTacToe() {

  const router = useRouter();
  const { locale } = router;
  const t = locale ? locales[locale] : locales['en'];

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<Player>(null);

  function reset() {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  }

  function setSquareValue(index: number) {

    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w);
    }

    if (!w && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  }, [squares]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {!winner && <p className="text-white text-xl md:text-2xl py-2">{t.ticTacToeGameHey} {currentPlayer}, {t.ticTacToeYoutTurn}</p>}
      {winner && winner !== "BOTH" && <p className="text-white text-xl md:text-2xl py-2">{t.ticTacToeGameCongratulations} {winner}</p>}
      {winner && winner === "BOTH" && (
        <div className="text-white text-xl md:text-2xl py-2 flex">{t.ticTacToeGameTie},&nbsp;<p className="underline cursor-pointer" onClick={reset}>{t.ticTacToeGamePlayAgain}</p></div>
      )}

      <div className="grid grid-cols-3">
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
      </div>

      <button className='w-56 p-2 px-8 mt-4 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm  bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg' onClick={reset}>{t.ticTacToeGameReset}</button>

    </div>
  );
}

export default TicTacToe;
