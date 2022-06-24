import axios from 'axios';

const axiosClient = axios.create();

// base url for axios
axiosClient.defaults.baseURL = 'http://localhost:3000/';

// headers for axios
axiosClient.defaults.headers = {
  'Authorization': localStorage.getItem("token"),
  'Content-Type': 'application/json',
  Accept: 'application/json'
};


// All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

// function for all get call api endpoints
export function getRequest(URL) {
    return axiosClient.get(`/${URL}`)
}
// function for all post call api endpoints 
export function postRequest(URL, payload) {
    return axiosClient.post(`/${URL}`, payload)
  }

// function for all update call api endpoints
export function patchRequest(URL, payload) {
    return axiosClient.patch(`/${URL}`, payload).then(response => response);
  }

// function for all delete call api endpoints
export function deleteRequest(URL) {
    return axiosClient.delete(`/${URL}`).then(response => response);
  }