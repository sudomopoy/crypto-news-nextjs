# Dockerfile for Next.js app
FROM node:18-alpine AS frontend

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
