import React, { useEffect, useState } from 'react'

const DEFAULT_QUOTES = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" }
]

function getTodaysIndex() {
  const now = new Date()
  return Math.abs(Math.floor(now.getTime() / (1000 * 60 * 60 * 24))) % DEFAULT_QUOTES.length
}

export default function App() {
  const [quote, setQuote] = useState(DEFAULT_QUOTES[getTodaysIndex()])

  useEffect(() => {
    // placeholder: load remote or personalized quote here
  }, [])

  return (
    <div className="app">
      <header>
        <h1>DailySpark</h1>
        <p className="subtitle">One personalized motivational quote every day</p>
      </header>
      <main>
        <div className="quote-card">
          <p className="quote">"{quote.text}"</p>
          <p className="author">— {quote.author}</p>
          <div className="actions">
            <button onClick={() => navigator.clipboard?.writeText(`${quote.text} — ${quote.author}`)}>Copy</button>
            <button onClick={() => alert('Shared! (placeholder)')}>Share</button>
          </div>
        </div>
      </main>
      <footer>
        <small>Local demo — personalize and add notifications in the real app.</small>
      </footer>
    </div>
  )
}
