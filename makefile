build-express-kit-image:
	docker build -t server-lerna-image ./packages/express-kit

build-vue-3-kit-image:
	docker build -t client-lerna-image ./packages/vue-3-kit

pull-mongo-image:
	docker pull mongo

run-express-lerna-container:
	docker run --rm --name express-lerna-container -p 5500:5500 -v ./packages/express-kit server-lerna-image

run-vue-3-lerna-container:
	docker run --rm --name vue-3-lerna-container -p 3001:3001 -v ./packages/vue-3-kit client-lerna-image

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
	docker build -t server-lerna-image ./packages/express-kit
	docker build -t client-lerna-image ./packages/vue-3-kit
	docker-compose up

chain-to-die:
	docker-compose down
	docker-compose stop
	docker rmi server-lerna-image
	docker rmi client-lerna-image