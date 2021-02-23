import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div> <img src = "/images/ironhack-logo.svg" /> </div>
            <div> <h1> Say hello to ReactJS </h1>  </div>
            <div> <p> You will learn how to use the most popular frontend 
            library, and become a super Ninja developer. </p> </div>
            <div> <button> Awesome! </button> </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#myApp"));