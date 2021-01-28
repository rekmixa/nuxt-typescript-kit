all: up logs

up:
	@docker-compose up -d --remove-orphans --force-recreate

down:
	@docker-compoes down

down-v:
	@docker-compose down -v

stop:
	@docker-compose stop

restart:
	@docker-compose restart

logs:
	@docker-compose logs -f node

cp-env:
	@test -f .env || cp .env-dist .env

docker-compose-override:
	@test -f docker-compose.override.yml || echo "version: '3'" >> docker-compose.override.yml

install: cp-env docker-compose-override up

yarn-generate:
	@yarn generate

create-zip-dir:
	@test -d zip || mkdir zip

zipName=dist

remove-old-zip-dist:
	@test -f zip/$(zipName).zip && rm zip/$(zipName).zip || echo "zip file does not exists"

create-zip-dist:
	@cd dist && zip -r ../zip/$(zipName).zip . && cd ../

zip-dist: create-zip-dir remove-old-zip-dist create-zip-dist

generate-zip: yarn-generate zip-dist
