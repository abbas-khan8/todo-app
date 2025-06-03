FROM node:22-slim

WORKDIR /src

COPY package*.json ./

RUN npm install
RUN apt-get update && apt-get install -y netcat-openbsd

COPY . .

RUN npm run build

EXPOSE 3000

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

CMD ["node", "dist/index.js"]