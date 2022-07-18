import { lazy, Suspense } from 'react';

const Counter = lazy(() => import('remote/Counter'));

const App = () => (
  <div>
    <div>HOST</div>
    <Suspense fallback={null}>
      <Counter />
    </Suspense>
  </div>
);

export default App;
