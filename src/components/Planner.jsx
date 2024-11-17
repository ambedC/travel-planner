import React from "react";
import Calendar from "react-calendar";

export default function Planner(props){
    const [value, setValue] = React.useState(0)
    
    const Increment = (e) => {
        e.preventDefault();
        setValue(value + 1)
    }

    const Decrement = (e) => {
        if(value!==0){
            e.preventDefault();
            setValue(value - 1)
        }
    }

    const [low,setLow] = React.useState(false)
    const [mid,setMid] = React.useState(false)
    const [high,setHigh] = React.useState(false)

    const [family,setFamily] = React.useState(false)
    const [friends,setFriends] = React.useState(false)
    const [couple,setCouple] = React.useState(false)
    const [solo,setSolo] = React.useState(false)


    return(
        <div className="P-container">
            <div className="p-header">
                <h1>Plan A Trippp</h1>
                <h2>Tell us your travel preference</h2>
                <p>Just provide some basic information, and <strong>Trippp</strong> will generate a customized itinerary based on your preferences.</p>
            </div>

            <div className="p-body">
                <div className="p-form">
                    <h4><strong>What is destination of choice?</strong></h4>
                    <input
                        type="text"
                        placeholder="Enter a location"
                    >
                    </input>               
                </div>

                <div className="p-form">
                    <h4><strong>When are you planning to travel?</strong></h4>
                    <input type="date" placeholder="Enter your date" ></input>
                </div>

                <div className="p-form">
                    <h4><strong>How many days are you planning to travel?</strong></h4>
                    <div className="p1-btn">
                        <button className="val-btn" onClick={Decrement}>-</button> 
                        <h5>{value}</h5>
                        <button className="val-btn" onClick={Increment}>+</button>
                    </div>
                </div>

                <div className="p-form">
                    <h4><strong>What is your budget?</strong></h4>
                    <div className="p-btn">
                        <button 
                            className={`low ${low ? 'toggled' : ''}`} 
                            onClick={() => setLow(!low)}>
                            Low<p>Rs.1000-Rs.2000</p>
                        </button>

                        <button 
                            className={`mid ${mid ? "toggled" : ""}`}
                            onClick={() => setMid(!mid)}>
                            Mid<p>Rs.5000-Rs.10000</p>
                        </button>

                        <button 
                            className={`high ${high ? "toggled" : ""}`} 
                            onClick={() => setHigh(!high)}>
                            High<p>Rs.10000+</p>
                        </button>
                    </div>
                </div>

                <div className="p-form">
                    <h4><strong>Who do you plan on travelling with?</strong></h4>
                    <div className="p-btn">
                        <button 
                            className={`solo ${solo ? "toggled" : ""}`}
                            onClick={() => setSolo(!solo)}>
                            Solo
                        </button>

                        <button 
                            className={`couple ${couple ? "toggled" : ""}`}
                            onClick={() => setCouple(!couple)}>
                            Couple
                        </button>

                        <button 
                            className={`friends ${friends ? "toggled" : ""}`}
                            onClick={() => setFriends(!friends)}>
                            Friends
                        </button>

                        <button 
                            className={`family ${family ? "toggled" : ""}`}
                            onClick={() => setFamily(!family)}>
                            Family
                        </button>
                    </div>
                    <button className="p-submit" onClick={props.toggleItinerary}>Submit</button>
                </div>
            </div>
            </div>
    )
}