import React from 'react';
import './Modal.css';

const Modal = ({ active, articles, onClick, preference, setpreference }) => {
    //add handlechange function to set preference
    const handleInputChange = (box) => {
        let newPreference;
        console.log(box);
        if (box === "positive") {
            newPreference = [!preference[0], preference[1], preference[2]]

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
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">What kind of news would you like to see?</p>
                        <button onClick={onClick} className="modal-close is-large" aria-label="close"></button>                </header>
                    <div className="modal-card-body">
                        
                            <label className="checkbox check-box">
                                <input type="checkbox" checked={preference[0]} onChange={() => handleInputChange("positive")} />  Positive
                            </label>

                            <label className="checkbox check-box">
                                <input type="checkbox" checked={preference[1]} onChange={() => handleInputChange("neutral")} />  Neutral
                            </label>
                            <label className="checkbox check-box">
                                <input type="checkbox" checked={preference[2]} onChange={() => handleInputChange("negative")} />  Negative
                            </label>
                      
                    </div>
                    <footer className="modal-card-foot">
    </footer>
                </div>
            </div>
        </form>
    )
}
export default Modal;