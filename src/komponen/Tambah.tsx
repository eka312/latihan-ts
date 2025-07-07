import React from 'react'
import '../style/Tambah.css'

type  FormData = {
    nama: string;
    deadline: string;
    status: string;
}

type TambahProps = {
    formData: FormData;
    onChange: (data: FormData) => void;
    onSave: (e: React.FormEvent) => void;
    onCancel: () => void;
}

function Tambah({ formData, onChange, onSave, onCancel}: TambahProps) {
    return (
        <div className="modal-overlay">
            <div className="modal-konten">
                <h3>Tambah Projek</h3>
                <form className="form-projek" onSubmit={onSave}>
                    <label>Nama Projek</label>
                    <input
                        type='text'
                        placeholder='Nama Projek'
                        value={formData.nama}
                        onChange={(e) => onChange({ ...formData, nama: e.target.value})}
                        required
                    />
                    <label>Deadline</label>
                    <input
                        type='date'
                        value={formData.deadline}
                        onChange={(e) => onChange({ ...formData, deadline: e.target.value})}
                        required
                        
                    />
                    <label>Status</label>
                    <select value={formData.status} onChange={(e) => onChange({ ...formData, status: e.target.value})} >
                        <option value=''>Pilih Status</option>
                        <option value='selesai'>Selesai</option>
                        <option value='proses'>Proses</option>
                    </select>

                    <div className="form-btn">
                        <button type='submit' className='btn-simpan'>Simpan</button>
                        <button type='button' className='btn-batal' onClick={onCancel}>Batal</button>
                    </div>
                </form>
            </div>
        </div>


        

    )
}

export default Tambah