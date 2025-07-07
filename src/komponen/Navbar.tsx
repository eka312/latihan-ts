import '../style/Navbar.css';
import { Link } from "react-router-dom";



function Navbar() {
    return (
        <nav className='navbar' >
            <div className="wrapper">
                <div className="logo"><a href=''>Latihan TS.</a></div>
                <div className="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#tutors">Tutors</a></li>
                        <li><a href="#patners">Partners</a></li>
                        <li><a href="#kontak">Contact</a></li>
                        <li><Link to="/login" className="tbl-biru">Log In</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar