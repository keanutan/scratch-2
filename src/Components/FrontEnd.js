import React, { Component } from 'react';
import './FrontEnd.css';

class FrontEnd extends Component {
    state = {
        burger: false,
        mobileWindow: false,
        windowSize: window.innerWidth
    };

    handleBurgerClick = () => {
        this.setState({ burger: !this.state.burger });
    }

    render() {
        return (
            <>
                <div className='row'>
                    <h3>Persons</h3>
                    <div className='column'>
                        <div className='Name'>
                            <h4>Name</h4>
                            <input type='text' className='name-input' placeholder='Person Name'></input>
                        </div>
                    </div>
                    <div className='column'>
                        <h4>Events</h4>
                        <select>
                            <option>Person</option>
                            <option>Artist</option>
                        </select>
                    </div>
                    <div className='column'>
                        <h4>Payment ID</h4>
                        <button>Create Person</button>
                    </div>
                    <div className='column'>
                        <h4>Amount ($)</h4>
                    </div>
                </div>
                <div className='row'>
                    <h3>Events</h3>
                    <div className='column'>
                        <div className='Name'>
                            <h4>Name</h4>
                            <input type='text' className='name-input' placeholder='Event Name'></input>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='Name'>
                            <h4>Date</h4>
                            <input type='date' className='name-input' placeholder='Event Name'></input>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='Name'>
                            <h4>Start</h4>
                            <input type='time' className='name-input' placeholder='Event Name'></input>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='Name'>
                            <h4>End</h4>
                            <input type='time' className='name-input' placeholder='Event Name'></input>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='Name'>
                            <h4>Artist</h4>
                            <input type='text' className='name-input' placeholder='Event Artist'></input>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <h3>Registrations</h3>
                    <div className='column'>
                        <h4>Person: </h4>
                        <select>
                            <option>Please select one</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className='column'>
                        <h4>Event: </h4>
                        <select>
                            <option>Please select one</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className='column'>
                        <h4>Register:</h4>
                        <button>Register</button>
                    </div>
                </div>
                <div className='row'>
                    <h3>Assign Professionals</h3>
                    <div className='column'>
                        <h4>Performer: </h4>
                        <select>
                            <option>Please select one</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className='column'>
                        <h4>Event: </h4>
                        <select>
                            <option>Please select one</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className='column'>
                        <h4>Assignment:</h4>
                        <button>Assign</button>
                    </div>
                </div>
                <div className='row'>
                <h3>Pay for Registration with GooglePay</h3>
                    <div className='column'>
                        <h4>Person: </h4>
                        <select>
                            <option>Please select one</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className='column'>
                        <h4>Event: </h4>
                        <select>
                            <option>Please select one</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className='column'>
                        <div className='Name'>
                            <h4>Device ID: </h4>
                            <input type='text' className='name-input' placeholder='ID'></input>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='Name'>
                            <h4>Amount</h4>
                            <input type='text' className='name-input' placeholder='$$$'></input>
                        </div>
                    </div>
                    <div className='column'>
                        <h4>Payment:</h4>
                        <button>Make Payment</button>
                    </div>
                </div>
            </>
        )
    }
}

export default FrontEnd;