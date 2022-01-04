import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'

export default class LanguageSelector extends Component {
    static contextType = LanguageContext;
    render() {
        console.log(this.context);
        return (
            <div>
                select language:
                <i onClick={() => this.context.onlanguageChange('english')} className='flag us' />
                <i onClick={() => this.context.onlanguageChange('dutch')} className='flag nl' />
            </div>
        )
    }
}
