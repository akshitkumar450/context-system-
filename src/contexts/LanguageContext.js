import React from 'react'
// default value
// creating context object

// steps for context with default value
// 1 create a context object
// 2 define contextType
// 3 use context with this.context
const Context = React.createContext('dutch')

export class LanguageStore extends React.Component {
    state = { language: 'english' }

    onlanguageChange = (language) => {
        this.setState({ language: language })
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context

