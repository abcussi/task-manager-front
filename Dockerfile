# Stage 1: Build the application
FROM node AS build-stage

WORKDIR /front
COPY package*.json /front/

RUN npm install
COPY ./ /front/
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx
COPY --from=build-stage /front/dist/ /usr/share/nginx/html

# Copy the default.conf file correctly
COPY default.conf /etc/nginx/conf.d/default.conf
