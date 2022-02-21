# Lerna monorepository Vue3/express starter kit (MEVN stack)

# About: it's lerna monorepo vue3 / express starter kit for you'r next project :)

Language: TypeScript

Frontend app: Vue 3

State management: Pinia

Backend app: Express

Tests: Jest (Unit / E2E)

Linter: ESLint

Formatter: Prettier

# Lerna logo

<p><img src="./assets/lerna_logo.png" width="450" /></p>

# Lerna scripts

start apps: _npm run dev_

unit test apps: _npm run test:unit_

e2e test apps: _npm run test:e2e_

setup a new version of lerna: _npm run new-version_

## Makefile commands

# Pull images

pull server-lerna-image: **make pull-server-lerna-image**

pull client-lerna-image: **make pull-client-lerna-image**

pull mongo-lerna-image: **make pull-mongo-lerna-image**

# Build

build client-lerna-image: **make build-client-lerna-image**

build server-lerna-image: **make build-server-lerna-image**

build mongo-lerna-image: **make build-mongo-lerna-image**

# Up containers

up vue-3-lerna-container: **make run-vue-3-lerna-container**

up express-lerna-container: **make run-express-lerna-container**

up mongo-lerna-container: **make run-mongo-lerna-container**

# Execute containers

exec vue-3-lerna-container: **make exec-vue-3-lerna-container**

exec express-lerna-container: **make exec-express-lerna-container**

exec mongo-lerna-container: **make exec-mongo-lerna-container**

# Down containers

down vue-3-lerna-container: **make down-vue-3-lerna-container**

down express-lerna-container: **make down-express-lerna-container**

down mongo-lerna-container: **make down-mongo-lerna-container**

# docker-compose up && .....

chain to life: **make chain-to-life**

chain to die: **make chain-to-die**
