import '../style/Patners.css';

type Patner = {
    image: string;
}

type PatnersProps = {
    patnersList: Patner[];
}

function Patners(props: PatnersProps) {
    return (
        <div className='patner-list'>
            {
                props.patnersList.map((item, index) => {
                    return (
                        <div className='kartu-patner' key={index}>
                            <img src={item.image} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Patners