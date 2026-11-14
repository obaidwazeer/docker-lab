import React, { useState } from 'react';

export default function App() {
  const [status, setStatus] = useState('Idle');
  const [clicks, setClicks] = useState(0);

  // Checks Vite (import.meta.env) or Create React App (process.env)
  const environment =
    (typeof import.meta !== 'undefined' && import.meta.env?.MODE) ||
    process.env.NODE_ENV ||
    'unknown';

  const runHealthCheck = () => {
    setClicks((prev) => prev + 1);
    setStatus(`OK (Checked at ${new Date().toLocaleTimeString()})`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '500px' }}>
      <h1>Docker React Test App</h1>
      <p>
        <strong>Status:</strong> Container is serving React successfully.
      </p>
      <p>
        <strong>Build Environment:</strong> {environment}
      </p>

      <hr style={{ margin: '1.5rem 0' }} />

      <button
        onClick={runHealthCheck}
        style={{ padding: '0.6rem 1.2rem', fontSize: '1rem', cursor: 'pointer' }}
      >
        Test Interactivity ({clicks})
      </button>
      <p>
        <strong>Health Check:</strong> {status}
      </p>
    </div>
  );
}
