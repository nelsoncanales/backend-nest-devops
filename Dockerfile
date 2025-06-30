FROM node:22 AS etapa-uno

WORKDIR  /usr/app

COPY ./ ./

RUN npm install

RUN npm run test

RUN npm run build

FROM node:22-alpine AS etapa-dos 

COPY --from=etapa-uno /usr/app/dist ./dist
COPY --from=etapa-uno /usr/app/node_modules ./node_modules
COPY --from=etapa-uno /usr/app/package*.json ./
RUN npm install --only=production

EXPOSE 3000

CMD ["node", "dist/main.js"]
