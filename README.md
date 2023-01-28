<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[![Docker Image CI](https://github.com/36524760/car-dealership-api/actions/workflows/docker-image.yml/badge.svg)](https://github.com/36524760/car-dealership-api/actions/workflows/docker-image.yml)

# Car Dealership

0. Clone repo

1. install packages
```
npm i
```

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

## Dockerize NestJs

0. Build the code

```
npm run build
```

1. Build the image

```
docker build . -t nodeapp:1
```

2. run the app with the image id or the name

  get image id
```
docker image ls
```
run 
```
docker run -d -p 3000:3000 nodeapp:1
```

Go to browser and use localhost:3000

3. Stop and delete the container

to find the running container
```
docker ps 
```
copy the hash example: abs43a6

and delete it

```
docker rm -f abs43a6
```


## Dockerize NestJs with multi stage
```
replace ./Dockerfile with ./docker-prod/Dockerfile
```

In this case there is no need to execute __`npm run build`__, just build the image and run it
