import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
export default class Button extends Component {
    // we are adding a property to class 
    // static contextType = LanguageContext;

    // when using consumer we do not need contextType and this.context

    render() {
        // console.log(this.context);
        // const text = this.context === 'english' ? 'submit' : 'voorleggen'

        return (
            <div>
                <button className='ui button primary'>
                    <LanguageContext.Consumer>
                        {(value) => value === 'english' ? 'submit' : 'voorleggen'}
                    </LanguageContext.Consumer>
                </button>
            </div>
        )
    }
}
