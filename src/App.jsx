import React, { useEffect, useMemo, useState } from 'react'
import { QUOTES, makeShuffledOrder } from './utils/quoteShuffle'
import { validateQuotes } from './utils/validation'
import { shareQuote } from './utils/shareQuote'

const SAFE_QUOTES = validateQuotes(QUOTES)

export default function App() {
  const [order, setOrder] = useState(() => makeShuffledOrder(SAFE_QUOTES.length || 1))
  const [index, setIndex] = useState(0)
  const quote = useMemo(() => SAFE_QUOTES[order[index]] || { text: 'No quotes available', author: '—' }, [order, index])

  useEffect(() => {
    // placeholder: could load remote or personalized quotes here
  }, [])

  function shuffleNext() {
    setIndex((prev) => {
      const next = prev + 1
      if (next >= order.length) {
        // reshuffle once we reach the end
        setOrder(makeShuffledOrder(SAFE_QUOTES.length || 1))
        return 0
      }
      return next
    })
  }

  return (
    <div className="app">
      <header>
        <h1>DailySpark</h1>
        <p className="subtitle">Shuffle through inspiring quotes anytime</p>
      </header>
      <main>
        <div className="quote-card">
          <p className="quote">"{quote.text}"</p>
          <p className="author">— {quote.author}</p>
          <div className="actions">
            <button onClick={() => navigator.clipboard?.writeText(`${quote.text} — ${quote.author}`)}>Copy</button>
            <button onClick={() => shareQuote(quote)}>Share</button>
            <button onClick={shuffleNext}>Shuffle</button>
          </div>
        </div>
      </main>
      <footer>
        <small>Local demo — personalize and add notifications in the real app.</small>
      </footer>
    </div>
  )
}
