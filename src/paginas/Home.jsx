import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Login from './Login';
import Registrar from './Registrar';

function Home() {
    return (
        <div>
             <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/registro">Registro</Link></li>
                </ul>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registrar />} />
      
                </Routes>
            </Router>
        </div>
    )
}


export default Home;