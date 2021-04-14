import React from 'react';
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
class App extends React.Component {

    state = {
        language: 'english',
    }
    onlanguageChange = (language) => {
        this.setState({ language: language })
    }
    render() {
        return (
            <div className='ui container'>
                <div>
                    select language:
                    <i onClick={() => this.onlanguageChange('english')} className='flag us' />
                    <i onClick={() => this.onlanguageChange('dutch')} className='flag nl' />
                </div>
                {this.state.language}

                <ColorContext.Provider value='red'>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>

            </div>
        )
    }
}


export default App
