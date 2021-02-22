import React, { Component } from 'react'
import image from "../img/profile.jpeg";
import "../styles/about.css";
export default class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="img-container">
                    <img src={image} alt="profile"/>
                </div>
                <div className="description-container">
                <h1>Hello from Vinz!</h1>
                <p>Too lazy to write some text and then Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, libero!</p>
                <p>Link to my GitHub:</p>
                <a href="https://www.github.com/vinc86" target="_blank" rel="noopener noreferrer">Visit my Repo!</a>
                </div>
            </div>
        )
    }
}
