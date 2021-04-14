import React from 'react';
import UserCreate from './UserCreate'
class App extends React.Component {

    state = {
        language: 'english'
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
                <UserCreate />
            </div>
        )
    }
}


export default App
