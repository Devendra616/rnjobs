import axios from 'axios';
import {FETCH_JOBS} from './types';
//import reverseGeocode  from 'latlng-to-zip';
import Geocoder from 'react-native-geocoding';
import qs from 'qs';

Geocoder.init('AIzaSyAznWv5zGHg_bSxD43fUkjhaJ8YSDA5Z-c');
const JOB_ROOT_URL = "https://jobs.github.com/positions.json?"
const JOB_QUERY_PARAMS = {
    description:'javascript',//job pattern to search
    distance:10, // area in miles around zipcode
    count:15, //no of results to fetch
    sort: 'DD', //Date posted in desc order,
    page:1,
    per_page:10//no of records per page
}

const buildJobsUrl = city => {
    const query = qs.stringify({...JOB_QUERY_PARAMS, location:city});
    return `${JOB_ROOT_URL}${query}`;
}

export const fetchJobs = (region, callback) => {
    return async (dispatch) => {
        try {
            let jsonResult = await Geocoder.from(region.latitude, region.longitude);
            
            let city = await jsonResult.results[0].address_components[6]['long_name']; //get city long name
           
           // = await geocoding(region); console.log(222222); console.log(zip)
            const url = buildJobsUrl(city);
            const {data} = await axios.get(url);  
            if(!data || data.length ===0 ) {
                data = [];
            }
            dispatch({type: FETCH_JOBS, payload: data});
            callback();
        } catch(err) {
            console.log("Error occured in fetching jobs:",err);
        }
    }
}
