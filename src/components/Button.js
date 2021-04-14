import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
export default class Button extends Component {
    // we are adding a property to class
    static contextType = LanguageContext;

    render() {
        // console.log(this.context);
        const text = this.context === 'english' ? 'submit' : 'voorleggen'

        return (
            <div>
                <button className='ui button primary'>{text}</button>
            </div>
        )
    }
}
