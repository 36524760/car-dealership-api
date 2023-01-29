# FROM node:lts-alpine as Builder
FROM node:16-alpine as Builder
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk update
COPY . . 
RUN npm install --omit=prod
RUN npm run build


# FROM node:lts-alpine this is more heavyweight img
FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
RUN apk update
COPY --from=Builder usr/src/app/dist ./dist
COPY --from=Builder usr/src/app/public ./public
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
ENV PORT 80
EXPOSE 80
RUN chown -R node /usr/src/app
USER node
ENTRYPOINT ["npm", "run", "start:prod"]


