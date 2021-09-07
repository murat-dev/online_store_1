import './bottomBar.scss'

const BottomBarModal = ({ title, addClass }) => {

    return (
        <div className={'bottom-bar__modal ' + addClass}>
            {title}
        </div>
    )
}

export default BottomBarModal