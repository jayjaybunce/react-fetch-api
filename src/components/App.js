import React from "react";
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar'


class App extends React.Component{
  state = {
    currentPage: '/',
    username: null,
    password: null
  }
  handleLoginSubmit = (event, username, password) =>{
    event.preventDefault()
    
    
    let newStateObj = {
      ...this.state,
      username: username,
      password: password
    }
    this.setState(newStateObj)

    
  }

  handleNavClick = (page) =>{
    let newStateObj = {...this.state, 
      currentPage: page
    }
    this.setState(newStateObj)
  }


  render(){
    return (
    
      <div className="App">
        <NavBar 
          currentPage={this.state.currentPage} 
          handleNavClick={this.handleNavClick} 
          username={this.state.username}
          password={this.state.password}
          handleLoginSubmit={this.handleLoginSubmit}

        />
      </div>
    );
  }
}


export default App;