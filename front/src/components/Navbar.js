import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Redux Node Auth</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;




//ty le nav milay
// import React, { Component } from 'react';
// import './Navbar.css'
// class Navbar extends Component {
//     render() {
//         return(
//             <div>
//                 <div class="header">
//                 <a href="#default" class="logo">CompanyMarketing</a>
//                     <div class="header-right">
//                         <a class="active" href="#home">Acceuil</a>
//                         <a href="#contact">Contact</a>
//                         <a href="#about">About</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Navbar;