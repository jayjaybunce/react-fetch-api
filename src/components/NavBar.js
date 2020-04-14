import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Weather from './Weather'
import Pokemon from './Pokemon'
import News from './News'
import StarWars from './StarWars'
import Home from './Home'
import '../materialize.css'


class NavBar extends React.Component{
  
  render(){
    return(
      <>
      <Router>
      <nav className="nav-extended  grey darken-4">
      <div className="nav-wrapper">
        <h2>Fetching around with API's</h2>
      </div>
      
      <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className='tab' onClick={() => this.props.handleNavClick('/')}>
                <Link to='/'>Home</Link>
            </li>
            <li className='tab' onClick={() => this.props.handleNavClick('/pokemon')}>
                <Link to='/pokemon' >Pokemon</Link>
            </li>
            <li className='tab' onClick={() => this.props.handleNavClick('/news')}>
                <Link to='/news'>News</Link>
            </li>
            <li className='tab' onClick={() => this.props.handleNavClick('/starwars')}>
                <Link to='/starwars'>StarWars</Link>
            </li>
            <li className='tab' onClick={() => this.props.handleNavClick('/weather')}>
                <Link to='/weather' className='active'>Weather</Link>
            </li>
            <li className='tab right'>
              {this.props.username? `Welcome back, ${this.props.username}  `: 'Please log in'}
            </li>
          </ul>
        </div>
      </nav>
      <div className='container'>
        <Route exact path="/" 
          render={(routeProps) => 
            <Home {...routeProps}
              handleLoginSubmit={this.props.handleLoginSubmit}
              username={this.props.username}
              password={this.props.password}  
            />
          }
          
        />
       
        <Route path="/weather" component={Weather} />
        <Route path="/pokemon" component={Pokemon} />
        <Route path="/news" component={News} />
        <Route path="/starwars" component={StarWars} />
      </div>
  </Router>
  </>
    )
  }
}



export default NavBar;