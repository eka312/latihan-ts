import { useState } from "react";
import Sidebar from "../komponen/Sidebar";
import Header from "../komponen/Header";
import '../style/Dashboard.css';
import type  {ProjekType } from "../data/ProjekList";

type DashboardProps = {
  projekList: ProjekType[];
};


function Dashboard({ projekList }: DashboardProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const totalProjek =  projekList.length;
  const totalSelesai = projekList.filter((p) => p.status.toLowerCase() === "selesai").length;
  const totalProses = projekList.filter((p) => p.status.toLowerCase() === "proses").length;




  return (
    <>
      <div className="dashboard-container">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="dashboard-main">
          <Header />
          <div className="cards">
            <div className="card">
              <h4>Total Projek</h4>
              <p>{totalProjek}</p>
            </div>
            <div className="card">
              <h4>Tugas Aktif</h4>
              <p>{totalProses}</p>
            </div>
            <div className="card">
              <h4>Selesai</h4>
              <p>{totalSelesai}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard