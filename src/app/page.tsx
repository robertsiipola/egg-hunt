'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Define the clue type and list of Easter clues
interface Clue {
  id: number;
  name: string;
  clue: string;
  image: string;
}

const CLUES: Clue[] = [
  { id: 1, name: 'Kinder Egg #1', clue: 'Look under the big green chair.', image: '/images/kinder-egg-1.png' },
  { id: 2, name: 'Kinder Egg #2', clue: 'Check inside your pink backpack.', image: '/images/kinder-egg-2.png' },
  { id: 3, name: 'Kinder Egg #3', clue: 'Behind the red flower pot on the porch.', image: '/images/kinder-egg-3.png' },
  { id: 4, name: 'Kinder Egg #4', clue: 'Next to Dad\'s slippers by the sofa.', image: '/images/kinder-egg-4.png' },
  { id: 5, name: 'Mignon Egg', clue: 'Tucked in the pages of your favorite storybook.', image: '/images/mignon-egg.png' },
  { id: 6, name: 'Chocolate Bunny', clue: 'Beside the garden gnome near the fence.', image: '/images/chocolate-bunny.png' },
  { id: 7, name: 'Giant Kinder Egg', clue: 'In the trunk of the family car.', image: '/images/giant-kinder-egg.png' },
];

export default function Home() {
  // step: -1 = start screen, 0-6 = current clue index, 7 = completion
  const [step, setStep] = useState<number>(-1);

  const startHunt = () => setStep(0);
  const handleFound = () => setStep((prev) => prev + 1);
  const restartHunt = () => setStep(-1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-6 bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 text-gray-900">
      {step === -1 && (
        <>
          <h1 className="text-3xl font-bold">Oletko valmis ensimmäiseen vihjeeseen?</h1>
          <Button
            onClick={startHunt}
            size="lg"
            variant="default"
            className="bg-pink-400 hover:bg-pink-500 text-white animate-pulse"
          >
            Aloita Munajahti
          </Button>
        </>
      )}

      {step >= 0 && step < CLUES.length && (
        <>
          <Image
            src={CLUES[step].image}
            alt={`Image for ${CLUES[step].name}`}
            width={300}
            height={200}
            className="rounded-lg shadow-lg mb-4"
          />
          <p className="text-xl text-center px-4">{CLUES[step].clue}</p>
          <Button
            onClick={handleFound}
            size="lg"
            variant="default"
            className="bg-green-400 hover:bg-green-500 text-white"
          >
            I Found It!
          </Button>
        </>
      )}

      {step >= CLUES.length && (
        <>
          <h1 className="text-3xl font-bold text-center">You found them all! Happy Easter!</h1>
          <Button
            onClick={restartHunt}
            size="lg"
            variant="default"
            className="bg-purple-400 hover:bg-purple-500 text-white"
          >
            Restart Hunt
          </Button>
        </>
      )}
    </div>
  );
}
