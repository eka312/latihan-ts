import type React from 'react';
import '../style/Kontak.css';

type KontakType = {
    content: React.ReactNode;
}

type KontakProps = {
    kontakSection: KontakType[];
}



function Kontak(props: KontakProps) {
  return (
    <div id='kontak' >
        <div className='wrapper'>
            <div className='footer'>
                {
                    props.kontakSection.map((item,index) => {
                        return(
                            <div className='footer-item' key={index}>
                                {item.content}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div> 
  )
}

export default Kontak