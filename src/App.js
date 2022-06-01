import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OpinionPage from './pages/OpinionPage';
import UpdateUserPage from './pages/UpdateUserPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

function App() {
  return (
    <main>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/opinion/:id' element={<OpinionPage />} />
          <Route path='/user/:id' element={<UpdateUserPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      <Footer />
    </main>
  );
}

export default App;
