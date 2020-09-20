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
                        <p className="modal-card-title">Welcome to the happily Woke mood modal!</p>
                        <button onClick={onClick} className="modal-close is-large" aria-label="close"></button>          </header>
                    <div className="modal-card-body">
                        
                        <h1 className="title is-4">What kind of news would you like to see?</h1>
                        <h2 className="subtitle is-6">Find the colored dot on each article that corresponds to the Mood colors below.</h2>
                        <label className="checkbox check-box pos">
                            <input type="checkbox" checked={preference[0]} onChange={() => handleInputChange("positive")} />   <strong className="pos">Positive</strong>, of course!
                        </label>

                        <label className="checkbox check-box neu">
                            <input type="checkbox" checked={preference[1]} onChange={() => handleInputChange("neutral")} />   <strong className="neu">Neutral</strong>, please.
                            </label>
                        <label className="checkbox check-box neg">
                            <input type="checkbox" checked={preference[2]} onChange={() => handleInputChange("negative")} />   I don't mind the <strong className="neg">Negative*</strong> today.
                        </label>
                            <br></br>

                        <h1 className="title is-4">What is Woke?</h1>
                        <h2 className="subtitle is-6">We keep it simple with the Merriam-Webster defintion, which states, in part: <p className="block"><span className="italic">chiefly US slang</span>: aware of and actively attentive to important facts and issues.</p></h2>   
                        <br></br>
                        <h1 className="title is-4">What is happily Woke?</h1>
                        <h2 className="subtitle is-6">How you might descibe yourself while using this site. We know how it can be out there, being bombarded by whatever the media decides to throw your way. With the help of Vader Sentiment, we help you filter your news to your liking.</h2>
                    </div>
                    <footer className="modal-card-foot">
                        <p><span className="asterisk">*</span>A study found that participants who watched negative news material, compared to those who watched positive or neutral material, showed increases in both anxious and sad moods. Perhaps follow up with a positive activiy. <span><a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.2044-8295.1997.tb02622.x" target="_blank" rel="noopener noreferrer" >Read more</a></span>.</p>
                    </footer>
                </div>
            </div>
        </form>
    )
}
export default Modal;