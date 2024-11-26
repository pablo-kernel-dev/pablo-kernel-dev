"use client";
import { CONFIG_UI } from "@/config/appConfig";
import { Button } from "@/ui/components";
import { useState, useEffect } from "react";

interface CardProps {
  index: number;
  symbol: string;
  flipped: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ index, symbol, flipped, onClick }) => {
  return (
    <div
      className={`text-xl font-bold flex items-center justify-center h-36 rounded-lg cursor-pointer transition-transform ${flipped ? "bg-green-500 text-white" : "bg-gray-700 text-transparent"}`}
      onClick={onClick}
    >
      {symbol}
    </div>
  );
};

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);

  const symbols = ["🍎", "🍌", "🍇", "🍓", "🥝", "🍒"]; // Simples emojis para las tarjetas

  useEffect(() => {
    const shuffledCards = shuffle([...symbols, ...symbols]);
    setCards(shuffledCards);
  }, []);

  const shuffle = (array: string[]): string[] => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleFlip = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) {
      return;
    }
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      const [first, second] = newFlipped;
      if (cards[first] === cards[second]) {
        setMatched((prev) => [...prev, first, second]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <section className={`${CONFIG_UI} space-y-2`}>
      <header className="space-y-1">
        <h3 className="text-2xl">Administrador de Tareas</h3>
        <h4>Este proyecto básico de React presenta un CRUD completo (crear, leer, actualizar, eliminar) para administrar una lista de tareas.</h4>
      </header>

      <div className="flex justify-between items-end">
        {/* <Button text="opcion 1" rightIcon={<Icon icon="bell" />} /> */}
        <Button text="opcion 2" />
      </div>

      <section className="border-y-4 border-sky-700 py-6">
        <div className="grid grid-cols-4 gap-4">
          {cards.map((symbol, index) => (
            <Card
              key={index}
              index={index}
              symbol={symbol}
              flipped={flipped.includes(index) || matched.includes(index)}
              onClick={() => handleFlip(index)}
            />
          ))}
        </div>
        <p className="mt-4 text-lg">Movimientos: {moves}</p>
      </section>

      <section>
        <p><span className="text-sky-700"><strong className="uppercase">Información</strong>:</span> Desarrollo de un CRUD de tareas, con visualización en tres formatos: lista, tabla y tarjetas.</p>
        <p><span className="text-sky-700"><strong className="uppercase">Detalles</strong>:</span> Las modificaciones y alteraciones realizadas en esta versión no afectan ninguna base de datos.</p>
        <p><span className="text-sky-700"><strong className="uppercase">Versión</strong>:</span> 1.0.0</p>
      </section>
    </section>
  );
};

export { MemoryGame };
