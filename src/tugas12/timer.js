import React, { Component } from 'react';
import './../App.css';  

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clock : new Date().toLocaleTimeString(),
            timer : 5,
        }
        
    }

    componentDidMount() {
        if (this.props.start !== undefined) {
            this.setState({
                timer: this.props.start,
            })
        }

        this.timerID = setInterval (
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            timer: this.state.timer - 1,
            clock: new Date().toLocaleTimeString(),
        });
    }


    render() {
        return (
            <table className="table text-lg" style={{ border:"none" }}>
            {/* Untuk menghilangkan komponen */}
             { this.state.timer > 0 && 
                <tr>
                    <td className="jam">sekarang jam: {this.state.clock}</td>
                    <td className="jam">hitung mundur: {this.state.timer}</td>
                </tr>
             }
            </table>
        )
    }
}


export default Timer;