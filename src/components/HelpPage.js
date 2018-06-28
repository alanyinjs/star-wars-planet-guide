import React from 'react';
import { Link } from 'react-router-dom';

const HelpPage = () => (
  <div className="container">
    <h1>Help Page</h1>
    <p>This page is to host a list of FAQs. If you would like to contact the author, please find his details on the <Link to="/contact">Contact</Link> page.</p>
  </div>
);

export default HelpPage;