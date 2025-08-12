import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, RotateCcw, Trophy } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

interface GameState {
  snake: Position[];
  food: Position;
  direction: string;
  isPlaying: boolean;
  gameOver: boolean;
  score: number;
}

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 15, y: 15 };
const INITIAL_DIRECTION = 'RIGHT';

const SnakeGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    snake: INITIAL_SNAKE,
    food: INITIAL_FOOD,
    direction: INITIAL_DIRECTION,
    isPlaying: false,
    gameOver: false,
    score: 0
  });

  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('snake-high-score');
    return saved ? parseInt(saved) : 0;
  });

  const generateFood = useCallback((snake: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, []);

  const moveSnake = useCallback(() => {
    setGameState(prevState => {
      if (!prevState.isPlaying || prevState.gameOver) return prevState;

      const { snake, direction, food, score } = prevState;
      const head = { ...snake[0] };

      // Move head based on direction
      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        const newHighScore = Math.max(score, highScore);
        setHighScore(newHighScore);
        localStorage.setItem('snake-high-score', newHighScore.toString());
        return { ...prevState, gameOver: true, isPlaying: false };
      }

      // Check self collision
      if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        const newHighScore = Math.max(score, highScore);
        setHighScore(newHighScore);
        localStorage.setItem('snake-high-score', newHighScore.toString());
        return { ...prevState, gameOver: true, isPlaying: false };
      }

      const newSnake = [head, ...snake];

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        const newScore = score + 10;
        const newFood = generateFood(newSnake);
        return {
          ...prevState,
          snake: newSnake,
          food: newFood,
          score: newScore
        };
      } else {
        newSnake.pop();
        return {
          ...prevState,
          snake: newSnake
        };
      }
    });
  }, [highScore, generateFood]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    setGameState(prevState => {
      if (!prevState.isPlaying) return prevState;

      let newDirection = prevState.direction;
      let shouldPreventDefault = false;
      
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (prevState.direction !== 'DOWN') newDirection = 'UP';
          shouldPreventDefault = true;
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (prevState.direction !== 'UP') newDirection = 'DOWN';
          shouldPreventDefault = true;
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (prevState.direction !== 'RIGHT') newDirection = 'LEFT';
          shouldPreventDefault = true;
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (prevState.direction !== 'LEFT') newDirection = 'RIGHT';
          shouldPreventDefault = true;
          break;
      }

      if (shouldPreventDefault) {
        e.preventDefault();
      }

      return { ...prevState, direction: newDirection };
    });
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (gameState.isPlaying && !gameState.gameOver) {
      const gameInterval = setInterval(moveSnake, 150);
      return () => clearInterval(gameInterval);
    }
  }, [gameState.isPlaying, gameState.gameOver, moveSnake]);

  const startGame = () => {
    setGameState({
      snake: INITIAL_SNAKE,
      food: generateFood(INITIAL_SNAKE),
      direction: INITIAL_DIRECTION,
      isPlaying: true,
      gameOver: false,
      score: 0
    });
  };

  const resetGame = () => {
    setGameState({
      snake: INITIAL_SNAKE,
      food: INITIAL_FOOD,
      direction: INITIAL_DIRECTION,
      isPlaying: false,
      gameOver: false,
      score: 0
    });
  };

  const renderCell = (x: number, y: number) => {
    const isSnakeHead = gameState.snake[0]?.x === x && gameState.snake[0]?.y === y;
    const isSnakeBody = gameState.snake.slice(1).some(segment => segment.x === x && segment.y === y);
    const isFood = gameState.food.x === x && gameState.food.y === y;

    let cellClass = 'snake-cell w-4 h-4';
    
    if (isSnakeHead) {
      cellClass += ' snake-body opacity-100';
    } else if (isSnakeBody) {
      cellClass += ' snake-body opacity-80';
    } else if (isFood) {
      cellClass += ' snake-food animate-pulse';
    } else {
      cellClass += ' bg-muted/20';
    }

    return (
      <div
        key={`${x}-${y}`}
        className={cellClass}
      />
    );
  };

  return (
    <section id="extras" className="section-padding bg-muted/30">
      <div className="container-portfolio">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-gradient">Extras</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Um jogo da cobrinha clássico desenvolvido em React para demonstrar 
            habilidades de programação interativa e lógica de jogos.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="snake-game">
            
            {/* Game Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Pontuação</p>
                  <p className="text-2xl font-bold text-primary">{gameState.score}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Recorde</p>
                  <p className="text-2xl font-bold text-foreground flex items-center gap-1">
                    <Trophy className="h-5 w-5" />
                    {highScore}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                {!gameState.isPlaying ? (
                  <Button onClick={startGame} className="btn-hero">
                    <Play className="h-4 w-4 mr-2" />
                    {gameState.gameOver ? 'Jogar Novamente' : 'Iniciar Jogo'}
                  </Button>
                ) : (
                  <Button onClick={resetGame} variant="outline">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reiniciar
                  </Button>
                )}
              </div>
            </div>

            {/* Game Board */}
            <div className="relative">
              <div 
                className="grid gap-0.5 bg-background p-4 rounded-lg border-2 border-border mx-auto"
                style={{ 
                  gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
                  maxWidth: '400px',
                  aspectRatio: '1'
                }}
              >
                {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => {
                  const x = index % GRID_SIZE;
                  const y = Math.floor(index / GRID_SIZE);
                  return renderCell(x, y);
                })}
              </div>

              {/* Game Over Overlay */}
              {gameState.gameOver && (
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">Game Over!</h3>
                    <p className="text-muted-foreground">Pontuação: {gameState.score}</p>
                    {gameState.score === highScore && gameState.score > 0 && (
                      <p className="text-primary font-semibold">🎉 Novo recorde!</p>
                    )}
                    <Button onClick={startGame} className="btn-hero">
                      <Play className="h-4 w-4 mr-2" />
                      Jogar Novamente
                    </Button>
                  </div>
                </div>
              )}

              {/* Instructions Overlay */}
              {!gameState.isPlaying && !gameState.gameOver && (
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-foreground">Como Jogar</h3>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p>Use as setas do teclado ou WASD para mover</p>
                      <p>Colete a comida vermelha para crescer</p>
                      <p>Evite bater nas paredes ou em si mesmo</p>
                    </div>
                    <Button onClick={startGame} className="btn-hero">
                      <Play className="h-4 w-4 mr-2" />
                      Começar
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Controls Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Controles: ← → ↑ ↓ ou W A S D
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SnakeGame;