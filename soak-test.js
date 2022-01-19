/*
Soak testing validates the reliability of the system over a time period. 
        - verify that system doesnt suffer from bugs or memory leaks, which can result in sys crash
        - make sure database doesnt exhaust that alloted the disk storage
        - make sure logs doesnt exhaust the disk storage
        - make sure external dependent services don't stop after a certain amount of requests

        : determine the maximum amount of users
        : run in 3 stages, ramp up users > stay for another 4 hours > ramp down

*/
import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '2m', target: 400 },
        { duration: '4h', target: 900 }, //stay at 900 for 4 hours
        { duration: '4m', target: 0 }, //scale down
        
    ],
};

const baseUrl = 'https://dev.everlycredit.com';

export default () => {

    http.batch([
        ['GET', `${baseUrl}/login`],
        ['GET', `${baseUrl}/sign-in`],
        ['GET', `${baseUrl}/signup`],
    ]);
    
    sleep(1);
};
