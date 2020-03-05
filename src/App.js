import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import adapter from 'webrtc-adapter';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/peers');
      // const newDate = await res.text();
      setDate(await res.text());
    }
    getDate();
  }, []);

  return (
    <main>
      <h1>Create React App + Go API</h1>
      <h2>
      </h2>
      <p>
      </p>
      <p>
        <a href="/api/date">
          <code>api/date</code> for the Date API with Go
        </a>
        .
      </p>
      <br />
      <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
