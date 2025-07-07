import '../style/Tutors.css';

type Tutor = {
    image: string;
    name: string;
}

type TutorsProps = {
    tutorsList: Tutor[];
}
 

function Tutors(props: TutorsProps) {
    return(
        <div className='tutor-list'>
            {
                props.tutorsList.map((item,index) => {
                    return(
                        <div className='kartu-tutor'key={index} >
                            <img src={item.image} />
                            <p>{item.name}</p>
                        </div>  
                    )
                })
            }
        </div>
    )
    
   
    
            
}

export default Tutors



