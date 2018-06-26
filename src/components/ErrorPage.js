import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div>
    <h1>Error: Your requested page does not exist</h1>
    <Link to='/'>Go back to homepage</Link>
  </div>
)

export default ErrorPage;