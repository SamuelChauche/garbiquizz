import { useState, useCallback, useEffect } from 'react';
import { Home } from '@/components/Home';
import { Quiz } from '@/components/Quiz';
import { Results } from '@/components/Results';
import { createSession } from '@/quiz.js';

export default function App() {
  const [phase, setPhase] = useState('home'); // 'home' | 'quiz' | 'results'
  const [session, setSession] = useState(null);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [phase, version]);

  const start = useCallback(() => {
    const s = createSession();
    setSession(s);
    setVersion((v) => v + 1);
    setPhase('quiz');
  }, []);

  const complete = useCallback(() => setPhase('results'), []);

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10 md:py-16">
      {phase === 'home' && <Home onStart={start} />}
      {phase === 'quiz' && session && (
        <Quiz session={session} onComplete={complete} version={version} />
      )}
      {phase === 'results' && session && <Results session={session} onRestart={start} />}
    </main>
  );
}
