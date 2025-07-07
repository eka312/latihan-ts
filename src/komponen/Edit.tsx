import React from 'react'
import '../style/Edit.css'

type ProjekType = {
    nama: string;
    deadline: string;
    status: string;
}

type EditProps = {
    formData: ProjekType;
    onChange: (data: ProjekType) => void;
    onSave: (e: React.FormEvent) => void;   
    onCancel: () => void;
}

function Edit({ formData, onChange, onSave, onCancel }: EditProps) {
  return (
    <div className="modal-overlay">
        <div className="modal-konten">
            <h3>Edit Projek</h3>
            <form className="form-projek" onSubmit={onSave}>
                <label>Nama Projek</label>
                <input
                    type='text'
                    placeholder='Nama Projek'
                    value={formData.nama}
                    onChange={(e) => onChange({ ...formData, nama: e.target.value })}
                    required
                />
                <label>Deadline</label>
                <input
                    type='date'
                    value={formData.deadline}
                    onChange={(e) => onChange({ ...formData, deadline: e.target.value })}
                    required
                />
                <label>Status</label>
                <select value={formData.status} onChange={(e) => onChange({ ...formData, status: e.target.value })}>
                    <option value=''>Pilih Status</option>
                    <option value='selesai'>Selesai</option>
                    <option value='proses'>Proses</option>
                </select>

                <div className="edit-btns">
                    <button type='submit' className='btn-simpan'>Simpan</button>
                    <button type='button' className='btn-batal' onClick={onCancel}>Batal</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Edit