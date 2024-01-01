import React , {Fragment} from 'react'
import './App.css'
import Footer from './components/master/Footer'
import Header from './components/master/Header'
import RenderBody from "./components/body/RenderBody";
import DarkModebtn from './components/darkmode/DarkModeBtn';

function App() {

  return (
    <Fragment>
      <DarkModebtn/>
      <Header/>
        <RenderBody/>
      <Footer/>
    </Fragment>
  )
}

export default App
