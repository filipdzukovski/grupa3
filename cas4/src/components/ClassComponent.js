import React from 'react';

export class ClassComponent extends React.Component{

    constructor(props){
        super(props);
        console.log("Hi This is called From the Constructor")
        this.state = {
            promenliva1: "Vrednost 1"
        }
    }

    componentDidMount(){
        console.log("Hi This is ComponentDidMount")
    }

    // smeniVrednost = () => {
    //     this.setState({
    //         promenliva1: "Nova Vrednost"
    //     })
    // }

    render(){
        console.log("Hi this is Render Method")
        return(
            <div id='class-component'>
                <p>Content goes here</p>
                <p>{this.state.promenliva1}</p>
                <button onClick={()=>{this.setState({
                    promenliva1:"Nova Vrednost"
                })}}>Click Me !</button>
            </div>
        )
    }

}