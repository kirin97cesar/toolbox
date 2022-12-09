FROM node:14-alpine
WORKDIR /srv/app
COPY . .
RUN apk update
RUN apk add --no-cache tzdata
ENV TZ America/Lima
RUN npm install
EXPOSE 4000

CMD ["node", "index.js"]