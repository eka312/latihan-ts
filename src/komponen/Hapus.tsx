import '../style/Hapus.css';

type Props = {
    onConfirm: () => void;
    onCancel: () => void;
}

function Hapus({onConfirm, onCancel}: Props) {
  return (
    <div className="modal-overlay">
        <div className="modal-konten-hapus">
            <h4>Yakin ingin menghapus projek ini?</h4>
            <div className="modal-actions">
              <button className='btn-batal-modal' onClick={onCancel} >Batal</button>
              <button className='btn-hapus-modal' onClick={onConfirm} > Ya, Hapus</button>
                
            </div>
        </div>
    </div>
  )
}

export default Hapus