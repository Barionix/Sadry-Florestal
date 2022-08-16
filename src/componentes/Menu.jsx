import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';


function Menu() {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
               
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                           <Link className="nav-link" to="/">Home</Link> <span class="sr-only">(current)</span>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/registro">Register</Link>
                        </li>
             
                        <li class="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                
                </div>
            </nav>
        </>
    )
}

export default Menu;