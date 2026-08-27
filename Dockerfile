# syntax=docker/dockerfile:1

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM deps AS build
WORKDIR /app
COPY . .
# NEXT_PUBLIC_* vars are inlined at build time, not readable from the Cloud Run
# runtime env — so the production app URL must be baked in here, not passed
# via `gcloud run deploy --set-env-vars`.
ARG NEXT_PUBLIC_APP_URL=https://app.vincelstudio.com
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL
ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn build

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

ENV PORT=8080
EXPOSE 8080
CMD ["node", "server.js"]
