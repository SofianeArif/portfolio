FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .

RUN npm run build

CMD ["node", "dist/app.js"]

EXPOSE 4242
