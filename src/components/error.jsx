// ErrorPage.js

import React from 'react';

const ErrorPage = () => {
  // Default error message
  const defaultErrorMessage = 'An error occurred. Please try again later.';

  return (
    <div>
      <h1>Error</h1>
      <p>{defaultErrorMessage}</p>
    </div>
  );
};

export default ErrorPage;