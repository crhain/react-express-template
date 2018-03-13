import axios from 'axios';
import { FETCH_USER, SAMPLE_ACTION } from './types';

export const fetchUser = () => async dispatch => {    
    const res = await axios.get('/users/current')
        .catch(e => {
            console.error("Error: ", e);
            return {data: {_id: "No User"}};
        });
              
    dispatch({type: FETCH_USER, payload: res.data});           
};

//****the following are just a samples of an actions - not for use
export const fetchSample = () => async dispatch => {
    const res = await axios.get('/api/sample');   
    dispatch({type: SAMPLE_ACTION, payload: res.data});           
};

//using react router history object to directly route
export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/sample', values);
    //takes history and uses it to progamatically route to /
    history.push('/');
    
    dispatch({type: FETCH_USER, payload: res.data });
}