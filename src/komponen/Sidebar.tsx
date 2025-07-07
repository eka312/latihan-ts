import {NavLink, useNavigate} from 'react-router-dom';
import {FaBars, FaTimes, FaCode, FaTasks, FaSignOutAlt} from 'react-icons/fa';
import '../style/Sidebar.css';
import { useState } from 'react';


type SidebarProps = {
    isOpen: boolean;
    toggleSidebar: () => void;
}

function Sidebar({isOpen, toggleSidebar}: SidebarProps) {
    const navigate = useNavigate();
    const [showConfirm, setShowConfirm] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/');
    };

    const confirmLogout = () => {
        setShowConfirm(true);
    };

    const cancelLogout = () => {
        setShowConfirm(false);
    };


    return (
        <div className={`sidebar ${isOpen ? "" : "closed"}`}>
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            
            <ul>
                <li>
                    <NavLink to="/Dashboard" className="nav-link" >
                        <FaTasks className="icon" />
                        {isOpen && <span>Dashboard</span>}
                        
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Projek" className="nav-link">
                        <FaCode className="icon" />
                        {isOpen && <span>Data Projek</span>}
                    </NavLink>
                </li>
                <li onClick={confirmLogout} className="logout">
                    <FaSignOutAlt className="icon" />
                    {isOpen && <span>Logout</span>}
                </li>

            
            </ul>

            {/* pop up konfirmasi */}
            {showConfirm && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>Apa kamu yakin mau logout?</p>
                        <div className="modal-btn">
                            <button onClick={handleLogout} className='ya-btn' >YA</button>
                            <button onClick={cancelLogout} className='gak-btn' >Tidak</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Sidebar