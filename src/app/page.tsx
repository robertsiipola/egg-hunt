'use client';

import { useState } from 'react';

// Define the clue type and list of Easter clues
interface Clue {
  id: number;
  name: string;
  clue: string;
}

const CLUES: Clue[] = [
  { id: 1, name: 'Kinder Egg #1', clue: 'Look under the big green chair.' },
  { id: 2, name: 'Kinder Egg #2', clue: 'Check inside your pink backpack.' },
  { id: 3, name: 'Kinder Egg #3', clue: 'Behind the red flower pot on the porch.' },
  { id: 4, name: 'Kinder Egg #4', clue: 'Next to Dad\'s slippers by the sofa.' },
  { id: 5, name: 'Mignon Egg',     clue: 'Tucked in the pages of your favorite storybook.' },
  { id: 6, name: 'Chocolate Bunny', clue: 'Beside the garden gnome near the fence.' },
  { id: 7, name: 'Giant Kinder Egg', clue: 'In the trunk of the family car.' }
];

export default function Home() {
  // step: -1 = start screen, 0-6 = current clue index, 7 = completion
  const [step, setStep] = useState<number>(-1);

  const startHunt = () => setStep(0);
  const handleFound = () => setStep((prev) => prev + 1);
  const restartHunt = () => setStep(-1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 space-y-6">
      {step === -1 && (
        <>
          <h1 className="text-3xl font-bold">Ready for your first clue?</h1>
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={startHunt}
          >
            Start Hunt
          </button>
        </>
      )}

      {step >= 0 && step < CLUES.length && (
        <>
          <p className="text-xl text-center px-4">{CLUES[step].clue}</p>
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            onClick={handleFound}
          >
            I Found It!
          </button>
        </>
      )}

      {step >= CLUES.length && (
        <>
          <h1 className="text-3xl font-bold text-center">You found them all! Happy Easter!</h1>
          <button
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            onClick={restartHunt}
          >
            Restart Hunt
          </button>
        </>
      )}
    </div>
  );
}
