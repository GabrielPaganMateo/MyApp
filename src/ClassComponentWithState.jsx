import { Component } from "react";

class ClassComponentWithState extends Component {

    constructor(props) {
        super(props)
        this.state = { count : 0 };
    }

    increment = () => {
        this.setState({count : this.state.count + 1});
    }

    render() {
        return (
            <>
                <label>Current State: {this.state.count}</label><br/>
                <button onClick={this.increment}>CHANGE STATE</button>
            </>
        )
    }
}

export default ClassComponentWithState





