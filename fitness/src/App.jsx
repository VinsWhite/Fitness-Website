import './sass/style.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage'
import NavbarComp from './components/NavbarComp';
import Reservation from './pages/Reservation'
import FooterComp from './components/FooterComp';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  return (
    <>
      <BrowserRouter>
      <Container fluid>
        <NavbarComp />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        <FooterComp />
      </Container>
      {/* <Row className='starter-bg py-5 m-0'>
          <Col className='starter-1 p-5 m-0'></Col>
          <Col className='starter-2 p-5 d-none d-md-block'></Col>
      </Row> */}
      </BrowserRouter>
    </>
  )
}

export default App
