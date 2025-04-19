# Egg Hunt App

A simple Next.js web application to power an Easter‐style egg hunt. The app presents a sequence of clues; when the user marks the current egg as “found,” the next clue is revealed until all seven treats have been located, and can be deployed instantly to Vercel.

---

## 1. Overview

**Purpose:**  
Guide players (your daughter) through seven hidden treats by revealing one clue at a time. Each time the player finds an egg/bunny and taps “Found,” the next clue appears.

**Hidden Items (7 total):**  
1. Kinder Egg ×4  
2. Mignon Egg ×1  
3. Chocolate Bunny ×1  
4. Giant Kinder Egg ×1  

---

## 2. User Flow

1. **Start Screen**  
   - “Start Hunt” button  
   - Brief welcome message (“Ready for your first clue?”)

2. **Clue Screen**  
   - Displays current clue text.  
   - “I Found It!” button (disabled once all are found).

3. **Completion Screen**  
   - Shown after the final (7th) item.  
   - Celebratory message (“You found them all! Happy Easter!”).  
   - “Restart Hunt” button to reset.

---

## 3. Clue Logic & Sequence

- **Data Structure:**  
  ```js
  const CLUES = [
    { id: 1, name: "Kinder Egg #1", clue: "Look under the big green chair." },
    { id: 2, name: "Kinder Egg #2", clue: "Check inside your pink backpack." },
    { id: 3, name: "Kinder Egg #3", clue: "Behind the red flower pot on the porch." },
    { id: 4, name: "Kinder Egg #4", clue: "Next to Dad’s slippers by the sofa." },
    { id: 5, name: "Mignon Egg",     clue: "Tucked in the pages of your favorite storybook." },
    { id: 6, name: "Chocolate Bunny",clue: "Beside the garden gnome near the fence." },
    { id: 7, name: "Giant Kinder Egg",clue: "In the trunk of the family car." }
  ];