FROM node:lts-alpine AS build-stage
# RUN apk add --update --no-cache \
#     python \
#     make \
#     g++
WORKDIR /build
COPY . .
RUN npm ci --prod

FROM node:lts-alpine AS production-stage
EXPOSE 8081
WORKDIR /usr/src/service
COPY --from=build-stage /build/node_modules node_modules
COPY --from=build-stage /build/src src
USER node
CMD ["node", "./src/server.js"]