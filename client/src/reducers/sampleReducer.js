import { SAMPLE_ACTION } from '../actions/types';

export default function(state = [], action) {    
    switch(action.type){
        case SAMPLE_ACTION:
            return action.payload;
        default:
            return state;
    }
}