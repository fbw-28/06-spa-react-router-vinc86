import React, { Component } from 'react'
import "../styles/contact.css"
export default class Contact extends Component {
    render() {
        return (
            <div>
                
                <form>
                    <div className="form-container">
                    <h1 class="form-heading">Contact Me</h1>
                        <input type="text" name="name" placeholder="Your name*" required />
                        <input type="email" name="email" placeholder="Your email*" required/>
                        <textarea name="message" placeholder="Your message*" required/>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        )
    }
}
