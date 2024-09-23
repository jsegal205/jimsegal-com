import { useState, useEffect } from "react";

const BOARD_SIZE = 20; // 20x20 grid

export const Snake = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [direction, setDirection] = useState({ x: 0, y: -1 }); // Starts moving upwards
  const [food, setFood] = useState({
    x: Math.floor(Math.random() * BOARD_SIZE),
    y: Math.floor(Math.random() * BOARD_SIZE),
  });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

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
        newHead.x < 0 ||
        newHead.x >= BOARD_SIZE ||
        newHead.y < 0 ||
        newHead.y >= BOARD_SIZE ||
        snake.some(
          (segment) => segment.x === newHead.x && segment.y === newHead.y,
        )
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

    const intervalId = setInterval(moveSnake, 200);

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [snake, direction, food, gameOver]);

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

  return (
    <div>
      <h1 className="text-center">Snake Game</h1>
      <label>Use Arrow keys to steer the Snake.</label>
      <div
        className={`grid grid-rows-[repeat(20,20px)] grid-cols-[repeat(20,20px)] border-slate-500 border-4`}
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
                key={row}
                className={`w-5 h-5 border border-slate-200 ${color}`}
              ></div>
            );
          }),
        )}
      </div>
      <label>Score: {score}</label>
      {gameOver && <h2>Game Over</h2>}
    </div>
  );
};
