FROM node:10-alpine as angular-build

COPY package.json yarn.lock ./
RUN yarn --pure-lockfile && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN npm rebuild node-sass
RUN npm install @angular/cli -g --silent

RUN ng build --prod --output-path=dist

FROM nginx:1.14.1-alpine

## Copy our default nginx config
COPY nginx/custom.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=angular-build /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]