# Load Testing with k6 with Grafana monitoring #

This README would normally document whatever steps needed to get this script up and running along with grafana

### Installing k6.io ###

https://k6.io/docs/getting-started/installation/

### Docker installation for influxDB, Grafana ###

https://docs.docker.com/engine/install/

After the installation of docker, simply run the following on the root dir of suite:

* docker-compose up -d influxdb grafana
* docker-compose run k6 run /scripts/script.js 

### Viewing in grafana ###

Viewing the results in grafana dashboard using:

* http://localhost:3000/d/k6/k6-load-testing-results

### Sending results to cloud ###

* k6 run script.js -o cloud

