FROM node:8.11.4 as build-env

COPY . /app

WORKDIR /app

RUN npm install

# Runtime environment
FROM node:8.11.4-alpine as runtime

COPY --from=build-env /app /app

WORKDIR /app

CMD ["npm", "start"]