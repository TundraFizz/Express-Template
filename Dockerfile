FROM node:carbon
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
COPY . .
ARG MODE
ENV mode=$MODE
RUN if [ "$MODE" = "local" ] ||  [ "$MODE" = "dev" ] ||  [ "$MODE" = "prod" ]; then :; else echo "The environment variable \"MODE\" must be either \"local\", \"dev\", or \"prod\""; exit 128; fi
EXPOSE 80
CMD npm run $mode
