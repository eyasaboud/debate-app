import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Debate App</h1>
        <nav>
          <ul>
            <li><a href="/debates">Browse Debates</a></li>
            <li><a href="/create">Start a Debate</a></li>
            <li><a href="/profile">My Profile</a></li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <section className="featured-debates">
          <h2>Featured Debates</h2>
          <div className="debate-list">
            <div className="debate-card">
              <h3>Should AI Development Be Regulated?</h3>
              <p>Active participants: 24</p>
              <button className="join-button">Join Debate</button>
            </div>
            <div className="debate-card">
              <h3>Is Remote Work the Future?</h3>
              <p>Active participants: 18</p>
              <button className="join-button">Join Debate</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <p>© 2024 Debate App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
