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
        { duration: '2m', target: 10 },
        { duration: '1m', target: 10 },
        { duration: '1m', target: 3 }, 
        
    ],

    thresholds: {
        'http_req_duration': ['p(95)<150'],  //95 % of requests respond in less than 150 milliseconds
},
};

export default function() {
    let response = http.get('https://onindev100.com.au/magpie/');

    sleep(1);
};