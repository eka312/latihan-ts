import { useEffect, useState } from "react";
import Sidebar from "../komponen/Sidebar"; 
import Tambah from "../komponen/Tambah";                     
import '../style/Projek.css';
import { FaEdit, FaFolderOpen, FaPlus, FaTrash } from "react-icons/fa";
import type { ProjekType } from "../data/ProjekList";
import Edit from "../komponen/Edit";
import Hapus from "../komponen/Hapus";

type ProjekProps = {
    projekList: ProjekType[];
    setProjekList: React.Dispatch<React.SetStateAction<ProjekType[]>>;
}



function Projek({projekList, setProjekList}: ProjekProps) {
    const [isOpen, setIsOpen] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editIndex, setEditIndex] = useState<number | null >(null);
    const [hapusIndex, setHapusIndex] = useState<number | null>(null);

    useEffect(()=> {
        localStorage.setItem('projekList', JSON.stringify(projekList));
    }, [projekList]);
        
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [formData, setFormData] = useState({
        nama: '',
        deadline: '',
        status: '',
    });

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();

        if(editIndex !== null) {
            const updateList = [...projekList];
            updateList[editIndex] = formData;
            setProjekList(updateList);
            setEditIndex(null);
        }else{
            setProjekList([...projekList, formData]);
        }
        
        setShowForm(false);
        setFormData({
            nama: '',
            deadline: '',
            status: '',
        });
    };

    const handleEdit = (index: number) => {
        setFormData(projekList[index]);
        setEditIndex(index);
    }

    const handleKonfirHapus = (index: number) => {
        setHapusIndex(index);
    }

    const handleHapus = () => {
        if (hapusIndex !== null) {
            const newList = projekList.filter((_, index) => index !== hapusIndex);
            setProjekList(newList);
            setHapusIndex(null);
        }
    }
    

    return (
        <>
            <div className="dashboard-container">
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
                <div className="projek-container" >
                    <div className="projek-header">
                        <h3><FaFolderOpen /> Data Projek</h3>
                        <button className="btn-tambah" onClick={() => setShowForm(true)} > <FaPlus/> Tambah </button>
                    </div>

                    {showForm && (
                        <Tambah
                            formData={formData}
                            onChange={setFormData}
                            onSave={handleSave}
                            onCancel={() => setShowForm(false)}
                        />
                    )}

                    {editIndex !== null && (
                        <Edit
                            formData={formData}
                            onChange={setFormData}
                            onSave={handleSave}
                            onCancel={() => {
                                setEditIndex(null);
                                setShowForm(false);
                            }}
                        />
                    )}  

                    {hapusIndex !== null && (
                        <Hapus 
                            onConfirm={handleHapus}
                            onCancel={() => setHapusIndex(null)}
                        />
                    )}
                    

                    <div className="table-wrapper">
                        <table className="projek-table" >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Projek</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projekList.map((item: ProjekType,index: number) =>(
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.deadline}</td>
                                        <td>
                                            <span className={`status ${item.status.toLowerCase()}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="aksi" >
                                            <button className="btn-edit" onClick={() => handleEdit(index)} ><FaEdit /> Edit</button>
                                            <button className="btn-hapus" onClick={() => handleKonfirHapus(index)} ><FaTrash /> Hapus</button>
                                        </td>
                                        
                                    </tr>
                                ))}       
                            </tbody>
                        </table>
                    </div>

                
                </div>
            </div>

        
        </>
    )
}

export default Projek