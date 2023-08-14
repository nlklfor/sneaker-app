import './Modal.scss'

const Modal = (props) => {
    return(
        <div className={'modal'}>
            <div className={'modal_content'}>
                Your order was successfully made , thank you!
            </div>
            <button className={'close_btn'} onClick={() => {props.setModalOpened(false)}}>x</button>
        </div>
    )
}

export default Modal;