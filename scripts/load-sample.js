/*
- assess current performance of the system with regard to usres and request per second
- can determine if new commits on the system have degraded or improved the system
- use threshold to determine if the system is delivering performance or not
*/



import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '5m', target: 100 },
        { duration: '10m', target: 100 },
        { duration: '4m', target: 0 }, 
        
    ],

    thresholds: {
        'http_req_duration': ['p(95)<150'],  //95 % of requests respond in less than 150 milliseconds
},
};

export default function() {
    let response = http.get('https://onindev100.com.au/magpie/');

    sleep(1);
};