import './sass/style.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage'
import NavbarComp from './components/NavbarComp';
import Reservation from './pages/Reservation'
import FooterComp from './components/FooterComp';

function App() {

  return (
    <>
      <BrowserRouter>
      <NavbarComp />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
      <FooterComp />
      </BrowserRouter>
    </>
  )
}

export default App
