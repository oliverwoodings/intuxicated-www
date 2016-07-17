BIN = ./node_modules/.bin

.PHONY: bootstrap start lint test build clean;

start:
	$(BIN)/webpack-dev-server --hot --inline --port 1234 --content-base public

serve:
	$(BIN)/http-server -p 1234 -d false ./dist 

lint:
	$(BIN)/standard

clean:
	rm -rf dist

build:
	mkdir -p dist
	cp -r public/* dist
	NODE_ENV=production $(BIN)/webpack -p --progress

bootstrap: package.json
	npm install

test: lint

deploy: build
	@pm2 deploy production
