FROM node:24-alpine

WORKDIR /app

RUN apk --no-cache add curl

ENV NODE_ENV=production

COPY package*.json .

RUN npm ci --omit=dev

COPY . .

CMD ["node", "index.js"]