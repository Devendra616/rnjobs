import _ from 'lodash';
import {LIKE_JOB} from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case LIKE_JOB:
            // action.payload has current job to be liked and state has prev liked jobs, id is unique identifier
            return _.uniqBy([action.payload,...state],'id');
        default :
            return state;
    }
}