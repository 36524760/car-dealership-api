<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[![Docker Image CI](https://github.com/36524760/car-dealership-api/actions/workflows/docker-image.yml/badge.svg?branch=main)](https://github.com/36524760/car-dealership-api/actions/workflows/docker-image.yml)

[![Build And Push To Registry](https://github.com/36524760/car-dealership-api/actions/workflows/push-img-to-acr.yml/badge.svg)](https://github.com/36524760/car-dealership-api/actions/workflows/push-img-to-acr.yml)

# Car dealer App



0. Clone repo

`git clone this`

1. install packages
```
npm i
```

1. *Important

>copy `.env.template` and create a new `.env` file and fill it with your preferences

>`jwt_expires_in` variable must be a string that indicates this time format: 10s 


2. run app
```
npm run start:dev
```

3. Populate DB
```
http://localhost:3000/seed
```

4. Get cars data and brands

http://localhost:3000/cars

http://localhost:3000/brands

---

## Dockerize NestJs with docker compose

1. Run dockercompose command

```
docker-compose up
```

Go to browser and use localhost:3000

3. Stop and delete the container

```
docker-compose down
```


## Dockerize NestJs with multi stage

This is a lightweight docker image

```
replace ./Dockerfile with ./docker-prod/Dockerfile

```
1. build image
```
docker build -t sometag:version --file ./docker-prod/Dockerfile .
```

2. Run container

docker run -d -p 3000:3000 -m=120mb customimagenameorimageid:version


*to find the running container
```
docker ps 
```
copy the hash example: abs43a6

*and delete it

```
docker rm -f abs43a6
```

