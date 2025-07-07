import { useState } from "react";
import Sidebar from "../komponen/Sidebar";
import Header from "../komponen/Header";
import '../style/Dashboard.css';


function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="dashboard-container">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="dashboard-main">
          <Header />
          <div className="cards">
            <div className="card">
              <h4>Total Projek</h4>
              <p>5</p>
            </div>
            <div className="card">
              <h4>Tugas Aktif</h4>
              <p>2</p>
            </div>
            <div className="card">
              <h4>Selesai</h4>
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard