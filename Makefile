BIN = ./node_modules/.bin

.PHONY: bootstrap start lint test build clean;

start:
	$(BIN)/webpack-dev-server --hot --inline --port 1234 --content-base public

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
