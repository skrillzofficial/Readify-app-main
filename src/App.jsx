
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SingleBookPage from './pages/SingleBookPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
 

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Navigate to='/'/>} />
          <Route path="/about" element={<Navigate to='/about'/>} />
          <Route path="/aboutpage" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          {/* we will do this one together */}
          <Route path="/book/:bookId" element={<SingleBookPage/>} />

          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App
