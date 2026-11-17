FROM node:lts-alpine
WORKDIR /app
COPY package*.json .
RUN npm ci \
 && npm cache clean --force
COPY app.js .
CMD ["node", "app.js"]
