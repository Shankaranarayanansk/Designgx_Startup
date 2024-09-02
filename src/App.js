import React from 'react'
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import TeamPage from './components/Team'
 import Cursor from './components/Cursor' 
const App = () => {
  return (
    <div>
      <Cursor/>
      <Nav/>
      <Home/>
      <Service/>
      <TeamPage/>
      <Contact/> 
      <Footer/> 
      <h1 style={{textAlign:'center'}}>@ DesignGX 2024</h1>
    </div>
  )
}

export default App