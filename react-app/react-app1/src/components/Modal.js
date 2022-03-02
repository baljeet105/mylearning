function Modal(props) {

    function confirmHandler(){
        props.onCancel();
    }

    function cancelHandler(){
        props.onConfirm();
    }

    return(
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
        </div>
    );
}
export default Modal;