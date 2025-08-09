import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Login from './components/Login'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'
import Signup from './components/Signup'
import Feed from './components/Feed'

const App = () => {
  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Body/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/' element={<Feed/>}/>
        </Route>
        
        
          
      </Routes>
    </BrowserRouter>
    </Provider>
      
    </>
  )
}

export default App
