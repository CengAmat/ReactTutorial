import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a:10
        }
        console.log(this.props);
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("Mount")
        this.setState({
            a: 20
        })
    }
    
    componentDidUpdate = (prevProps, prevState) => {
        console.log("Update")
    }

    shouldComponentUpdate(){
        console.log("Should Component Update");

        return true;
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
        
    }
    
    render() {
        console.log("Render")
        return (
            <div>
                
            </div>
        )
    }
}
