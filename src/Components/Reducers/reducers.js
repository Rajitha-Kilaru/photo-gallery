import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit"

const initialState = {
    login_details: {},
    register_data: {}
}

export const reducers = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_DETAILS': 
            return {
                ...state,
                login_details: action.payload
            }
        case 'REGISTRATION_DATA':
            return {
                ...state,
                register_data: action.payload
            }
        default:
            return state;
    }
}

export const myReducers = combineReducers({reducers})

export const store = configureStore({reducer: myReducers})