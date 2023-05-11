import React from 'react';
import './App.css';
import './assets/style/global.css'
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppHeader } from './components/AppHeader';
import { MailPage } from './pages/MailPage';
import { KeepPage } from './pages/KeepPage';
import { KeepEdit } from './apps/keep/pages/KeepEdit';

function App() {
  return (
    <Router>
    <div className="App">
      <div className='grid-container'>
      <header className="App-header">
        <AppHeader></AppHeader>
      </header>
      <Routes>
        <Route path='/keep/edit/:keepId?' element={<KeepEdit/>} />
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
