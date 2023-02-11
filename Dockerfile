FROM node:16-alpine
RUN apk update
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . . 
RUN npm run build
CMD [ "npm", "run", "start" ]