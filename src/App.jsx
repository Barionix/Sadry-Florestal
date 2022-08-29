import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Midia from './pages/Midia/Midia'
import Sirva from './pages/Sirva/Sirva'
import Agenda from './pages/Agenda/Agenda'
import Doe from './pages/Doe/Doe'
import Container from './componentes/Containers/Container'
import NavBar from './componentes/Menus/NavBar'
import Footer from './componentes/Footer'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Container customClass = "lag-min"/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/midia" element={<Midia/>} />
          <Route path="/sirva" element={<Sirva />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/doe" element={<Doe />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
