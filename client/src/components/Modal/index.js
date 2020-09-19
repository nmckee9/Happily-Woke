import React from 'react';
import './Modal.css';

const Modal = ({ active, articles, onClick, setPreference }) => {
    //add handlechange function to set preference
    const handleInputChange= () => {

    }
    // add is checked value and tunary to each input
    return (
        <form  >
        <div className={`modal ${active ? "is-active" : ""}`}>
            <div className="modal-background" onClick={onClick} ></div>
            <div className="modal-content">
                <div className="box">
                    <label className="checkbox">
                        <input type="checkbox" onChange={() => handleInputChange("positive")} />
                            Positive
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" onChange={() => handleInputChange("neutral")} />
                            Neutral
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" onChange={() => handleInputChange("negative")}/>
                            Negative
                    </label>
                </div>
            </div>
            <button onClick={onClick} className="modal-close is-large" aria-label="close"></button>
        </div>
        </form>
    )
}

export default Modal;

