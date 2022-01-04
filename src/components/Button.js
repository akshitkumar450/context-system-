import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

export default class Button extends Component {
    // we are adding a property to class 
    // static contextType = LanguageContext;

    // when using consumer we do not need contextType and this.context

    render() {
        // console.log(this.context);
        // const text = this.context === 'english' ? 'submit' : 'voorleggen'

        // consumer only require one function
        return (
            <div>
                <ColorContext.Consumer>
                    {(color) =>
                        <button className={`ui button ${color}`} >
                            <LanguageContext.Consumer>
                                {(value) => value.language === 'english' ? 'submit' : 'voorleggen'}
                            </LanguageContext.Consumer>
                        </button>
                    }

                </ColorContext.Consumer>

            </div>
        )
    }
}
