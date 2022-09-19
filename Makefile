all: build

.PHONY: node_modules
node_modules: node_modules/.deps

node_modules/.deps: package-lock.json
	npm install
	touch node_modules/.deps

package-lock.json: package.json
	npm i --package-lock-only

.PHONY: build
build: node_modules
	npm run build

.PHONY: clean
clean:
	rm -r ./node_modules ./build ./docs ./.parcel-cache

.PHONY: lint
lint: node_modules
	npm run lint

.PHONY: test
test: node_modules build
	npm run test

.PHONY: format
format: node_modules
	npm run format
