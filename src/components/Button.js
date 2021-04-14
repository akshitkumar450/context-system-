import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
export default class Button extends Component {
    // we are adding a property to class
    static contextType = LanguageContext;

    render() {
        console.log(this.context);
        return (
            <div>
                <button className='ui button primary'>submit</button>
            </div>
        )
    }
}
