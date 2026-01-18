import { useState, useCallback } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const signInWithGoogle = useCallback(async () => {
    setUser({ id: 'u_stub', name: 'Demo User' });
    return { user: { id: 'u_stub' } };
  }, []);
  const signOut = useCallback(() => setUser(null), []);
  return { user, signInWithGoogle, signOut };
}
