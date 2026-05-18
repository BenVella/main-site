# Use a slim Node image for the Astro development server.
FROM node:20-slim

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 4321

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
