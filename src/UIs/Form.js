import React from 'react';

const ContactForm = () => (
  <form>
    <div className="form-group">
      <label>Name</label>
      <input type="text" className="form-control" placeholder="Enter your name" />
    </div>
    <div className="form-group">
      <label>Email address</label>
      <input type="email" className="form-control" placeholder="Enter email" />
    </div>
    <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control" placeholder="Password" />
    </div>
    <div className="form-group">
      <label for="exampleTextarea">Message</label>
      <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Enter message"></textarea>
    </div>
    <button type="submit" className="btn btn-primary" onClick={e => {e.preventDefault()}}>Submit</button>
  </form>
);

export default ContactForm;