"use client";
import React, { useState } from "react";
interface Pet {
    mood: string;
    health: number;
    lastFed: Date;
}

interface UsePetReturn {
    pet: Pet;
    setPet: React.Dispatch<React.SetStateAction<Pet>>;
}

export function usePet(): UsePetReturn {
    const [pet, setPet] = useState<Pet>({
        mood: "curious",
        health: 100,
        lastFed: new Date(),
    });
    return { pet, setPet };
}
export default function DigitalPet({ pet }: { pet: Pet }) {
  return <pre style={{ color: "#03ff7e" }}>{`
    /\\_/\\ 
   ( ${pet.mood === "excited" ? ">. <" : "o o"} )
    > ^ <
  `}</pre>;
}
