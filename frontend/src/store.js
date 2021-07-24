import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetiailsReducer, productListReducer } from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetiailsReducer
})

const intitialState = {}

const middleware = [thunk]

const store = createStore(reducer, intitialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store