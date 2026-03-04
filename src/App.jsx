import { Fragment } from 'react';
import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <Fragment>
      <Header />

      <main
        role="main"
        style={{
          minHeight: 'calc(100vh - 120px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <AuthInputs />
      </main>
    </Fragment>
  );
}
