FROM node:10-alpine as builder
WORKDIR /app
ADD . ./
RUN yarn install
RUN yarn run build

FROM node:10-alpine
WORKDIR /app
ENV NODE_ENV=production
ADD package.json ./
ADD nuxt.config.js ./
COPY --from=builder ./app/node_modules ./node_modules/
COPY --from=builder ./app/.nuxt ./.nuxt/
COPY --from=builder ./app/static ./static/
CMD ["npm", "run", "start"]