import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Login from './Login';
import Menu from '../componentes/Menu';
import Registrar from './Registrar';

function Home() {
    return (
        <div>
             <Router>
            <Menu/>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registrar />} />
      
                </Routes>
            </Router>
        </div>
    )
}


export default Home;