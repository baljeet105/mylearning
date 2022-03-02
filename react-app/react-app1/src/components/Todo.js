import BackDrop from "./BackDrop";
import Modal from "./Modal";
import { useState } from "react";

function Todo(props) {

    const [modalIsOpen, setModelisOpen] = useState(false);

    function deleteHandler() {
        setModelisOpen(true);
    }

    function closeModalHandler(){
        setModelisOpen(false);
    }

    return(
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            { modalIsOpen && <BackDrop onCancel={closeModalHandler} />}
        
        </div>
    );
}
export default Todo;