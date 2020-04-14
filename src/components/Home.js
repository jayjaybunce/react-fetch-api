import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Login from './Login'


class Home extends React.Component{
  render(){
    return(
      <div>
        <h1>Home</h1>
        {this.props.username ? 'Please select an api to explore above' : <Login
          handleLoginSubmit={this.props.handleLoginSubmit}
        />}
        
      </div>
    )
  }
}


export default Home;