import { Component } from 'react';

class ClassComponentWithLifeCycleMethods extends Component {

    componentDidMount() {
        console.log('Mounted!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`Updated! ${prevProps} ${prevState}`);
    }

    componentWillUnmount() {
        console.log('Unmounting...');
    }

    render() {
        return <h1>Hello!</h1>;
    }

}