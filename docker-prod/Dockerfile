FROM node:16-alpine as Builder
RUN apk update
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . . 
RUN npm run build



FROM node:16-alpine
RUN apk update
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY --from=Builder usr/src/app/dist ./dist
COPY --from=Builder usr/src/app/public ./public
ENV PORT 3000
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "start:prod"]
