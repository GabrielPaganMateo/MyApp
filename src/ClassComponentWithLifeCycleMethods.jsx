import { Component } from 'react';

class ClassComponentWithLifeCycleMethods extends Component {

    // After initial render
    componentDidMount() {
        console.log('Mounted!');
    }

    // After every update or specific state change
    componentDidUpdate(prevProps, prevState) {
        console.log(`Updated! ${prevProps} ${prevState}`);
    }

    // Before unmount
    componentWillUnmount() {
        console.log('Unmounting...');
    }

    render() {
        return <h1>Hello!</h1>;
    }

}

export default ClassComponentWithLifeCycleMethods







