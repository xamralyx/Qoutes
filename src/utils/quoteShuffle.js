// Quotes dataset and shuffle helpers

export const QUOTES = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Whether you think you can or think you can’t, you’re right.", author: "Henry Ford" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
  { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" }
  // Original, short motivational lines to avoid copyright concerns
  ,{ text: "Small steps every day build remarkable change.", author: "Anonymous" }
  ,{ text: "Show up, even when it’s hard.", author: "Anonymous" }
  ,{ text: "Progress over perfection, always.", author: "Anonymous" }
  ,{ text: "Your future is made from today’s choices.", author: "Anonymous" }
  ,{ text: "Consistency beats intensity when intensity fades.", author: "Anonymous" }
  ,{ text: "Start now; momentum follows action.", author: "Anonymous" }
  ,{ text: "Do the work when no one is watching.", author: "Anonymous" }
  ,{ text: "Focus on what you can control.", author: "Anonymous" }
  ,{ text: "One more try changes everything.", author: "Anonymous" }
  ,{ text: "Learn fast, adjust, continue.", author: "Anonymous" }
  ,{ text: "Clarity grows with commitment.", author: "Anonymous" }
  ,{ text: "Believe, begin, become.", author: "Anonymous" }
  ,{ text: "Discipline is a daily decision.", author: "Anonymous" }
  ,{ text: "Your effort writes your story.", author: "Anonymous" }
  ,{ text: "Courage is taking the next step.", author: "Anonymous" }
  ,{ text: "Create the habit; the habit creates you.", author: "Anonymous" }
  ,{ text: "Keep going until it clicks.", author: "Anonymous" }
  ,{ text: "Energy flows where attention goes.", author: "Anonymous" }
  ,{ text: "Plan less, do more.", author: "Anonymous" }
  ,{ text: "You’re closer than you think.", author: "Anonymous" }
];

// Fisher–Yates shuffle: returns a new shuffled order of indices
export function makeShuffledOrder(len, seed) {
  const order = Array.from({ length: len }, (_, i) => i);
  // Simple seeded PRNG for reproducibility if desired
  let s = typeof seed === 'number' ? seed : Date.now() % 2147483647;
  function rand() {
    s = (s * 48271) % 2147483647;
    return s / 2147483647;
  }
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

export function getRandomIndex(len, exclude) {
  if (len <= 1) return 0;
  let idx = Math.floor(Math.random() * len);
  if (typeof exclude === 'number') {
    while (idx === exclude) idx = Math.floor(Math.random() * len);
  }
  return idx;
}
