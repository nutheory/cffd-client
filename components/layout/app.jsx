import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import DefaultLayout from './default'
import Main from '../main/index'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <DefaultLayout path='/' component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
