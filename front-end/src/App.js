import React, { Component } from 'react';
import HomeView, {LoginView, RegisterView} from './pages'
import { Router } from '@reach/router'
import Navigation from './components/navigation'
import SideBar, { Shader } from './components/sidebar'

import './App.css';

class App extends Component {
  state = {
    navigationLinks: [
      {
        url: '/about',
        label: 'About'
      },
      {
        url: '/contact',
        label: 'Contact'
      },
      {
        url: '/login',
        label: 'Login'
      },
      {
        url: '/register',
        label: 'Register'
      }
    ],
    sidebar: {
      links: [],
      isOpen: false
    }, 
    isConnected: true
  }
  openSidebar = () => {
    this.setState({
      sidebar: {
        links: [],
        isOpen: true
      }
    })
  }
  closeSidebar = () => {
    console.log('close sidebar')
    this.setState(state => {
      return { sidebar: {...state.sidebar, isOpen: false} }
    })
  }
  render() {
    return (
      <div className="app">
        <Navigation links={this.state.navigationLinks} onClick={this.openSidebar} />
        <SideBar 
          links={this.state.sidebar.links}
          isOpen={this.state.sidebar.isOpen}
        />
        <Router>
          <HomeView path="/"/>
          
           <LoginView path="/login" />
           <RegisterView path="/register" />
         

        </Router>
        <Shader  
          isShowing={this.state.sidebar.isOpen}
          dispose={this.closeSidebar} />
      </div>
    );
  }
}

export default App;
