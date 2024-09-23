import { useState, useEffect } from "react";
import { Button } from "@/components/button";

const BOARD_SIZE = 20; // 20x20 grid

export const Snake = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [food, setFood] = useState({
    x: Math.floor(Math.random() * BOARD_SIZE),
    y: Math.floor(Math.random() * BOARD_SIZE),
  });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(0);

  // Handle snake movement
  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      const newSnake = [...snake];
      const newHead = {
        x: newSnake[0].x + direction.x,
        y: newSnake[0].y + direction.y,
      };

      // Check collision with walls or self
      if (
        speed !== 0 &&
        (newHead.x < 0 ||
          newHead.x >= BOARD_SIZE ||
          newHead.y < 0 ||
          newHead.y >= BOARD_SIZE ||
          snake.some(
            (segment) => segment.x === newHead.x && segment.y === newHead.y,
          ))
      ) {
        setGameOver(true);
        return;
      }

      newSnake.unshift(newHead); // Add new head to snake

      // Check if the snake has eaten food
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(score + 1);
        setFood({
          x: Math.floor(Math.random() * BOARD_SIZE),
          y: Math.floor(Math.random() * BOARD_SIZE),
        });
      } else {
        newSnake.pop(); // Remove the tail unless eating food
      }

      setSnake(newSnake);
    };

    const intervalId = speed !== 0 ? setInterval(moveSnake, speed) : -1;

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [snake, direction, food, gameOver, speed]);

  // Handle keyboard input for direction
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y !== 1) {
            setDirection({ x: 0, y: -1 });
          }
          break;
        case "ArrowDown":
          if (direction.y !== -1) {
            setDirection({ x: 0, y: 1 });
          }
          break;
        case "ArrowLeft":
          if (direction.x !== 1) {
            setDirection({ x: -1, y: 0 });
          }
          break;
        case "ArrowRight":
          if (direction.x !== -1) {
            setDirection({ x: 1, y: 0 });
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  const setSpeedAndStart = (speed: "low" | "mid" | "high") => {
    switch (speed) {
      case "low":
        setSpeed(400);
        break;
      case "mid":
        setSpeed(200);
        break;
      case "high":
        setSpeed(100);
        break;
      default:
        break;
    }

    setDirection({ x: 0, y: -1 });
  };

  return (
    <div>
      <h1 className="text-center">Snake Game</h1>

      {gameOver ? (
        <div className="text-center">
          <h2 className="text-red-700">Game Over</h2>
          <h3 className="text-green-700">Score: {score}</h3>
        </div>
      ) : null}

      {speed === 0 || gameOver ? (
        <>
          <h3 className="text-center">
            {gameOver ? <label className="block">Play again?</label> : null}
            Choose your difficulty
          </h3>
          <div className="flex justify-between">
            <Button onClick={() => setSpeedAndStart("low")}>Easy</Button>
            <Button onClick={() => setSpeedAndStart("mid")}>Normal</Button>
            <Button onClick={() => setSpeedAndStart("high")}>Hard</Button>
          </div>
        </>
      ) : null}

      <div
        className={`grid grid-rows-[repeat(20,20px)] grid-cols-[repeat(20,20px)] border-slate-500 border-4${gameOver ? " opacity-70" : ""}`}
      >
        {Array.from({ length: BOARD_SIZE }).map((_, row) =>
          Array.from({ length: BOARD_SIZE }).map((_, col) => {
            const isSnake = snake.some(
              (segment) => segment.x === col && segment.y === row,
            );
            const isFood = food.x === col && food.y === row;

            const color = isFood
              ? "bg-red-500"
              : isSnake
                ? "bg-slate-800"
                : "bg-white";

            return (
              <div
                key={`${col}-${row}`}
                className={`w-5 h-5 border border-slate-200 ${color}`}
              ></div>
            );
          }),
        )}
      </div>

      {gameOver ? null : (
        <div className="flex justify-between">
          <label>Score: {score}</label>
          <label>Use Arrow keys to steer the Snake.</label>
        </div>
      )}
    </div>
  );
};
