import React from 'react';
import './Modal.css';

const Modal = ({ active, articles, onClick }) => {
    return (
        <div className={`modal ${active ? "is-active" : ""}`}>
            <div className="modal-background" onClick={onClick} ></div>
            <div className="modal-content">
                <div className="box">
                    <label class="checkbox">
                        <input type="checkbox" />
                            Positive
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" />
                            Neutral
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" />
                            Negative
                    </label>
                </div>
            </div>
            <button onClick={onClick} className="modal-close is-large" aria-label="close"></button>
        </div>

    )
}

export default Modal;

