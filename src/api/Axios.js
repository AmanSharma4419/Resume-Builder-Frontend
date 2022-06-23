import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'http://localhost:3001/';

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

// axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export function getRequest(URL) {
    return axiosClient.get(`/${URL}`)
}
  
export function postRequest(URL, payload) {
  console.log(URL,payload,"kkkk")
    return axiosClient.post(`/${URL}`, payload)
  }
  
export function patchRequest(URL, payload) {
    return axiosClient.patch(`/${URL}`, payload).then(response => response);
  }
  
export function deleteRequest(URL) {
    return axiosClient.delete(`/${URL}`).then(response => response);
  }