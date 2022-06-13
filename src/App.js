import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import {CreateOpinionPage} from "./pages/CreateOpinionPage"
import OpinionPage from './pages/OpinionPage';
import UserPage from './pages/UserPage';
import UpdateUserPage from './pages/UpdateUserPage'
import NotFoundPage from './pages/NotFoundPage';

import './App.css';
import './css/Header.css'
import './css/Footer.css'
import './css/Opinion.css'
import './css/HomePage.css'
import './css/UpdateUser.css'

function App() {
  return (
    <main className='app'>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/opinion/new' element={<CreateOpinionPage/>} />
          <Route path='/opinion/:id' element={<OpinionPage />} />
          <Route path='/user/:id' element={<UserPage />} />
          <Route path='/updateuser/:id' element={<UpdateUserPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      <Footer />
    </main>
  );
}

export default App;
