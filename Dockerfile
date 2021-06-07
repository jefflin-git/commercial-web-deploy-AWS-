FROM node:10.15.0
ENV NODE_ENV=production
WORKDIR /node
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev
