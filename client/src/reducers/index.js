import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import sampleReducer from './sampleReducer';


export default combineReducers({
    auth: authReducer,
    sample: sampleReducer,
    form: reduxForm
});