import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentes/pages/Home'
import Midia from './componentes/pages/Midia'
import Sirva from './componentes/pages/Sirva'
import Agenda from './componentes/pages/Agenda'
import Doe from './componentes/pages/Doe'

import NavBar from './componentes/layout/NavBar'
import Footer from './componentes/layout/Footer'
import Container from './componentes/layout/Container'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Container customClass = "lag-min"/>}>
          <Route path="/" element={<Home />} />
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
