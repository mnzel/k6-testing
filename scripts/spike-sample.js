
   
/*
- variation of stress test, spikes with extreme load over a short period of time
- determines how the system behaves with sudden traffic surge
- determines if system will recover when the traffic is normal
# excellent : system performance is not degraded during traffic surge
              Response time is similar in both low and high traffic
# good : reponse time is slower, but system does not generate any error
         all response are handled
# poor : system performance is degraded during traffic surge, produces error but recovers after traffic is normal
# bad : system crashes and does not recover
*/
import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '10s', target: 100 },
        { duration: '1m', target: 100 },
        { duration: '10s', target: 1400 }, //spike to 1400 users
        { duration: '3m', target: 1400 },  //stay at 1400 for 3 minutes
        { duration: '10s', target: 100 },  //scale down, recovery
        { duration: '2m', target: 900 },  //another spike
        { duration: '10s', target: 0 },
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