"use client";
import { useState, useEffect, useMemo } from "react";
import { CONFIG_UI } from "@/config/appConfig";
import { AngryIcon, CoolIcon, CryIcon, DevilIcon } from "./icons";

type SymbolType = "angry" | "cool" | "cry" | "devil";

const FLIP_DELAY = 1000;
const FLIPPED_STYLES = "bg-green-500 text-white";
const UNFLIPPED_STYLES = "bg-gray-700 text-transparent";

interface CardProps {
  index: number;
  symbol: SymbolType;
  flipped: boolean;
  onClick: () => void;
}

const renderIcon = (symbol: SymbolType) => {
  const icons = {
    angry: <AngryIcon />,
    cool: <CoolIcon />,
    cry: <CryIcon />,
    devil: <DevilIcon />,
  };
  return icons[symbol] || null;
};

const Card: React.FC<CardProps> = ({ index, symbol, flipped, onClick }) => (
  <div
    key={index}
    className={`text-xl font-bold flex items-center justify-center h-36 rounded-lg cursor-pointer transition-transform 
      ${flipped ? FLIPPED_STYLES : UNFLIPPED_STYLES}`}
    onClick={onClick}
    role="button"
    aria-pressed={flipped}
    aria-label={flipped ? `Carta con símbolo ${symbol}` : "Carta oculta"}
  >
    {flipped ? renderIcon(symbol) : null}
  </div>
);

const shuffleArray = <T,>(array: T[]): T[] => { // Fisher-Yates
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MemoryGame: React.FC = () => {
  const symbols: SymbolType[] = ["angry", "cool", "cry", "devil"];
  const [cards, setCards] = useState<SymbolType[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedIndices, setMatchedIndices] = useState<Set<number>>(new Set());
  const [moves, setMoves] = useState<number>(0);

  useEffect(() => {
    const shuffledCards = shuffleArray([...symbols, ...symbols]);
    setCards(shuffledCards);
  }, []);

  const handleCardFlip = (index: number) => {
    if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedIndices.has(index)) {
      return; // Ignora la acción si ya hay dos cartas volteadas o la carta está emparejada
    }

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    // Verifica si las dos cartas coinciden
    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      const [first, second] = newFlipped;

      if (cards[first] === cards[second]) {
        setMatchedIndices((prev) => new Set([...prev, first, second]));
      }

      // Reinicia las cartas volteadas después del retraso
      setTimeout(() => setFlippedIndices([]), FLIP_DELAY);
    }
  };

  useEffect(() => {
    if (matchedIndices.size === cards.length && cards.length > 0) {
      const timeout = setTimeout(() => {
        alert(`¡Felicidades! Completaste el juego en ${moves} movimientos.`);
      }, FLIP_DELAY);

      return () => clearTimeout(timeout);
    }
  }, [matchedIndices.size, cards.length, moves]);

  const renderBoard = useMemo(
    () => (
      <div className="grid grid-cols-4 gap-4">
        {cards.map((symbol, index) => (
          <Card
            key={index}
            index={index}
            symbol={symbol}
            flipped={flippedIndices.includes(index) || matchedIndices.has(index)}
            onClick={() => handleCardFlip(index)}
          />
        ))}
      </div>
    ),
    [cards, flippedIndices, matchedIndices]
  );

  return (
    <section className={`${CONFIG_UI} space-y-2`}>
      <header className="space-y-1">
        <h3 className="text-2xl">Juego de Memoria</h3>
      </header>

      <section className="border-y-4 border-sky-700 py-6">
        {renderBoard}
        <p className="mt-4 text-lg">Movimientos: {moves}</p>
      </section>
    </section>
  );
};

export { MemoryGame };
