// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { PageTitle } from '@my-org/ui-header';
import { Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ApiResponse, API_URL } from '@my-org/api-interface';

export function App() {
  const [apiResponse, setApiResponse] = useState({ message: 'loanding' });
  useEffect(() => {
    fetch('API_URL')
      .then((r) => r.json())
      .then(setApiResponse);
  });
  return (
    <>
      <main>
        <p>{apiResponse.message}</p>
      </main>
      <PageTitle />
    </>
  );
}

export default App;
