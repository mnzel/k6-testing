/*
# stress testing determines the limit of the system
# verify reliability and stability under extreme conditions
# determines the max capacity of the system
# determines the breaking point of system and its failure mode
*/
import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '2m', target: 100 },
        { duration: '5m', target: 100 },
        { duration: '2m', target: 200 },
        { duration: '5m', target: 300 },
        { duration: '2m', target: 500 },
        { duration: '5m', target: 900 },
        { duration: '2m', target: 0 },
    ],
};

const baseUrl = 'url_here';

export default function() {
    
    http.batch([
       
        ['GET', `${baseUrl}/login`],
        ['GET', `${baseUrl}/sign-in`],
        ['GET', `${baseUrl}/signup`],  
        ]);

        sleep(1);
    };