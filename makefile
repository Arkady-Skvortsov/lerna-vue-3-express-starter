build-express-kit-image:
	docker build -t 389798/server-lerna-image ./packages/express-kit

build-vue-3-kit-image:
	docker build -t 389798/client-lerna-image ./packages/vue-3-kit

pull-mongo-image:
	docker pull mongo

pull-server-lerna-image:
	docker pull 389798/server-lerna-image

pull-client-lerna-image:
	docker pull 389798/client-lerna-image

run-express-lerna-container:
	docker run --rm --name express-lerna-container -p 5502:5502 -v ./packages/express-kit 389798/server-lerna-image

run-vue-3-lerna-container:
	docker run --rm --name vue-3-lerna-container -p 3000:3000 -v ./packages/vue-3-kit 389798/client-lerna-image

run-mongo-lerna-container:
	docker run --rm --name mongo-lerna-container -p 27017:27017 --env-file=./packages/express-kit/.env -e MONGO_INITDB_ROOT_USERNAME:$MONGO_USERNAME -e MONGO_INITDB_ROOT_PASSWORD:$MONGO_PASSWORD mongo

exec-express-lerna-container:
	docker exec -it express-lerna-container /bin/bash

exec-vue-3-lerna-container:
	docker exec -it vue-3-lerna-container /bin/bash

exec-mongo-lerna-container:
	docker exec -it mongo-lerna-container mongo

down-express-lerna-container:
	docker stop express-lerna-container

down-vue-3-lerna-container:
	docker stop vue-3-lerna-container

down-mongo-lerna-container:
	docker stop mongo-lerna-container

chain-to-life:
	docker build -t 389798/client-lerna-image --file=./packages/vue-3-kit/dockerfile ./packages/vue-3-kit
	docker build -t 389798/server-lerna-image --file=./packages/express-kit/dockerfile ./packages/express-kit
	docker-compose up

chain-to-die:
	docker-compose down
	docker-compose stop
	docker rmi 389798/client-lerna-image
	docker rmi 389798/server-lerna-image