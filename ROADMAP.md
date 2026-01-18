# Smart Quote Mobile — Roadmap (starter)

Steps:
- Top-6 prioritized features scaffolded for incremental work: Favorites, Browse categories, Offline support, Share image, OAuth stub, Analytics+Sentry stub.
- CI workflow added to run tests and build.
- Expand individual features into branches as needed.

Top-6 prioritized features (short)
- Favorites | Save quotes locally & sync later | As a user I want to favorite quotes so I can re-read them | High | 8h | 2 | src/hooks/useFavorites.js, src/components/FavoriteButton.jsx | feat/favorites
- Browse categories | Filter by tags | As a user I want to filter by category so I find relevant quotes | High | 12h | 3 | src/components/CategoryFilter.jsx, src/hooks/useCategories.js | feat/browse-categories
- Offline support | Cache quotes & offline UI | High | 20h | 4 | src/service-worker.js, src/hooks/useOffline.js | feat/offline-cache
- Share as image | Export quote as image | High | 10h | 3 | src/utils/exportImage.js, src/components/ShareButton.jsx | feat/share-image
- OAuth Google (stub) | OAuth entrypoints | High | 12h | 3 | src/hooks/useAuth.js | feat/auth-google
- Analytics & Sentry | Track events & errors | High | 6h | 1 | src/utils/analytics.js, src/utils/sentry.js | chore/analytics-sentry

Local commands
- Install deps: npm install
- Run dev: npm --prefix smart-quote-mobile run dev
- Run tests: npm --prefix smart-quote-mobile test
