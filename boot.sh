#!/bin/bash
docker run -d --name ratesdb mongo

docker run -d --name rates.investments \
 -p 3003:3000                          \
 --link ratesdb:mongodb                \
 --env-file=docker/env                 \
 lmyjo/rates
