import './App.css';
import {Routes,Route}from "react-router-dom";
import {Header} from './components/Header';
import {LoginPage} from './pages/LoginPage';
import { RegisterPage } from "./pages/RegisterPage";
import {CreateOpinionPage} from "./pages/CreateOpinionPage"
import { Footer } from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div className="main-grid">
    <Header/>
    <Routes>
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/opinion/new' element={<CreateOpinionPage/>} />
    <Route path='*' element={<NotFoundPage />} />
    </Routes>
    <Footer/>
    
    </div>
  );
}

export default App;
