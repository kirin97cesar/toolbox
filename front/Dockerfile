FROM node:16-alpine
WORKDIR /srv/app
COPY . .
RUN apk update
RUN apk add --no-cache tzdata
ENV TZ America/Lima
RUN npm i
RUN npm i -D
EXPOSE 8080

CMD ["npm", "start"]