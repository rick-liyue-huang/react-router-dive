import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>HOME</Link>
        <nav>
          <Link to='/about'>ABOUT</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
