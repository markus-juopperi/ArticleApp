# base image
FROM node:12.2.0-alpine

WORKDIR /app
COPY . ./
EXPOSE 3000
# install and cache app dependencies
RUN npm install

# start app
CMD ["npm", "start"]