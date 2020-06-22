import React from 'react'
import 'antd/dist/antd.css'
import ReactDOM from 'react-dom'
import Main from './pages/Main'
import * as serviceWorker from './serviceWorker'
import FormDataContext from './context/FormDataContext'

ReactDOM.render(
  <React.StrictMode>
    <FormDataContext>
      <Main />
    </FormDataContext>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
