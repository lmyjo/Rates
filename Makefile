all: build-release

build-release:
	docker build -t lmyjo/rates -f docker/Dockerfile .

clean:
	docker rmi -f lmyjo/rates
