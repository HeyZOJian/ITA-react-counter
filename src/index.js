import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import counter from './reducers'
import {Provider} from "react-redux"

const middleware = [thunk]
const store = createStore(
    counter, applyMiddleware(...middleware)
)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))
