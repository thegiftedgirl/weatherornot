import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {getCurrentLatLng} from '../src/services/geolocation';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import './App.css';
import userService from './utils/userService';
import weatherApiService from './utils/getWeatherData';




class App extends Component {

  state = {
    user: userService.getUser(),
    weatherData: {},
    getCurrentLatLng
  }

handleSignupOrLogin = () => {
  this.setState({ user: userService.getUser()})
  this.handleGetWeatherData();
}

handleLogout = () => {
  userService.logout();
  this.setState({ user: null, weatherData: {}});
}

handleGetWeatherData = async () => {
  const data = await weatherApiService.getWeatherData();
  this.setState({ weatherData: data });
}

 async componentDidMount(){
   const { lat, lng } = await getCurrentLatLng();
  if(userService.getUser()) {
    this.handleGetWeatherData();
  }
} 

 




  render() {
    return (
        <div className="App-outer-container">
          <Navbar handleLogout={this.handleLogout} />
          <div className="App-inner-container">
            <Switch>
              <Route exact path="/" render={props =>
              <Home />
              }/>
              <Route exact path="/profile" render={props =>
              userService.getUser()
              ? <Profile 
                  weatherData={this.state.weatherData}
                />
              : <Redirect to="/login" />
                }/>
                  <Route exact path="/login" render={props =>
                    <Login 
                    {...props}
                    handleSignupOrLogin={this.handleSignupOrLogin}
                    />
                    }/>
                   <Route exact path="/signup" render={props =>
                  <Signup 
                {...props} 
                handleSignupOrLogin={this.handleSignupOrLogin}
               />
               } />
            </Switch>
          </div>
          <Footer />
        </div>
      );
    }
 }
export default App;
