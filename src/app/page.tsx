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
  { id: 1, name: 'First Clue', clue: 'Lainasin vähän koripalloasi, mutta jätin sen viereen yllätyksen!', image: '/images/first-clue-v2.png' },
  { id: 2, name: 'Second Clue', clue: 'Jätin hikiset vaatteeni ja yllätyksen pyykkikoriinne!', image: '/images/second-clue-v2.png' },
  { id: 3, name: 'Third Clue', clue: 'Jumppaamisen jälkeen minulle oli kova jano ja heitin vesipullon pullokoriin.', image: '/images/third-clue-v2.png' },
  { id: 4, name: 'Fourth Clue', clue: 'Juomisen jälkeen halusin piirtää kynilläsi! Jätin askartelulaatikkoon jotain kivaa!', image: '/images/fourth-clue-v2.png' },
  { id: 5, name: 'Fifth Clue', clue: 'Leikin myös vähän pehmoleluillasi! Jätin niille myös herkkuja.', image: '/images/fifth-clue-v2.png' },
  { id: 6, name: 'Sixth Clue', clue: 'Sen jälkeen minullekin tuli nälkä ja leivoin pipareita!', image: '/images/sixth-clue-v2.png' },
  { id: 7, name: 'Seventh Clue', clue: 'Ja ennen kuin lähdin teiltä kävin vielä vessassa, jonne jätin ison yllätyksen!', image: '/images/seventh-clue-v2.png' },
];

export default function Home() {
  // step: -1 = start screen, 0-6 = current clue index, 7 = completion
  const [step, setStep] = useState<number>(-1);

  const startHunt = () => setStep(0);
  const handleFound = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => Math.max(0, prev - 1));
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
          <p className="text-2xl font-semibold text-center px-4 text-gray-800 mb-4">{CLUES[step].clue}</p>
          <Image
            src={CLUES[step].image}
            alt={`Image for ${CLUES[step].name}`}
            width={300}
            height={200}
            className="rounded-lg shadow-lg mb-4"
          />
          <div className="flex space-x-4">
            {step > 0 && (
              <Button
                onClick={handleBack}
                size="lg"
                variant="default"
                className="bg-gray-400 hover:bg-gray-500 text-white"
              >
                Takaisin
              </Button>
            )}
            <Button
              onClick={handleFound}
              size="lg"
              variant="default"
              className="bg-green-400 hover:bg-green-500 text-white"
            >
              Löysin!
            </Button>
          </div>
        </>
      )}

      {step >= CLUES.length && (
        <>
          <h1 className="text-3xl font-bold text-center">Löysit kaikki yllätykset! Hyvää pääsiäistä.</h1>
          <Button
            onClick={restartHunt}
            size="lg"
            variant="default"
            className="bg-purple-400 hover:bg-purple-500 text-white"
          >
            Aloita alusta!
          </Button>
        </>
      )}
    </div>
  );
}
