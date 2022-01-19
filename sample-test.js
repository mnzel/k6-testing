import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export let options = {

    vus: 100,
    noConnectionReuse: false,
    duration: '30s',
};

export default function() {
    http.get('https://dev.everlycredit.com');
    sleep(1);
};