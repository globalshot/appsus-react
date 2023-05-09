import React from 'react';
import './App.css';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppHeader } from './components/AppHeader';
import { MailPage } from './pages/MailPage';
import { KeepPage } from './pages/KeepPage';

function App() {
  return (
    <Router>
    <div className="App">
      <div className='grid-container'>
      <header className="App-header">
        <AppHeader></AppHeader>
      </header>
      <Routes>
        <Route path='/keep' element={<KeepPage/>} />
        <Route path='/mail' element={<MailPage/>} />
        <Route path='/' element={<HomePage />} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
