import './style.scss'

const Characteristics = ({data}) => {
    return(
        <>
        <div className='characteristics'>
            <div className='characteristics__title'>{data.title}</div>
            <div className='characteristics__info'>{data.info}</div>
        </div>
        </>
    )
}

export default Characteristics