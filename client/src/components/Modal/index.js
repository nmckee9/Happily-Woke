import React from 'react';
import './Modal.css';

const Modal = ({ active, articles, onClick, preference,  setpreference }) => {
    //add handlechange function to set preference
    const handleInputChange= (box) => {
        let newPreference;
        console.log(box);
        if (box === "positive") {
            newPreference= [!preference[0], preference[1], preference[2]]
            
        }
        if (box === "neutral") {
            newPreference = [preference[0], !preference[1], preference[2]];
        }
        if (box === "negative") {
            newPreference = [preference[0], preference[1], !preference[2]];
        }
        setpreference(newPreference);
            console.log(newPreference)
            localStorage.setItem("preference", JSON.stringify(newPreference))
        
    }
    // add is checked value and tunary to each input
    return (
        <form  >
        <div className={`modal ${active ? "is-active" : ""}`}>
            <div className="modal-background" onClick={onClick} ></div>
            <div className="modal-content">
                <div className="box">
                    <label className="checkbox">
                        <input type="checkbox" name="positive" checked={preference[0]} onChange={() => handleInputChange("positive")} />
                            Positive
                    </label>
                    <label className="checkbox">
                        <input type="checkbox"  name="neutral" checked={preference[1]} onChange={() => handleInputChange("neutral")} />
                            Neutral
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" name="negative" checked={preference[2]} onChange={() => handleInputChange("negative")}/>
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

