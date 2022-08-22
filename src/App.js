import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImgaeLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import DisplayImage from './Components/DisplayImage/DisplayImage';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      route: 'signin',
      isSignedIn: false,
    }
  }

  onInputChanges = (event) => {
    this.setState({input: event.target.value});
  }
  onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input});
  console.log(this.state.input);
  }

  onRouteChange = (route) => {
    if (route  === 'signout') {
      this.setState({isSignedIn:false});
    } else if (route === 'home') {
      this.setState({ isSignedIn: true});
    }
    this.setState({route: route});
  }
  render(){
  const { isSignedIn, imageUrl, route } = this.state;
  return (
    <div className="App">
      <Navigation isSignedIn={ isSignedIn } onRouteChange={this.onRouteChange}/>
      { route === 'home'
        ? <div>
            <Logo />
            <Rank />
            <ImgaeLinkForm 
              onButtonSubmit={this.onButtonSubmit} 
              onInputChanges={this.onInputChanges} 
            />
            <DisplayImage imageUrl={imageUrl}/>
          </div> 
      : (
        route === 'signin' 
        ? <Signin onRouteChange={this.onRouteChange}/>
        : <Register onRouteChange={this.onRouteChange}/>
      )
      }
    </div>
  );
}
}
export default App;
