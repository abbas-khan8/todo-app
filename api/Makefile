dev-compose-clean-build:
	docker compose -f docker-compose.yml -f docker-compose.test.yml down --remove-orphans
	docker compose -f docker-compose.yml -f docker-compose.test.yml build --no-cache

dev-compose-build:
	docker compose -f docker-compose.yml -f docker-compose.test.yml build --no-cache

dev-compose-up:
	docker compose -f docker-compose.yml -f docker-compose.test.yml up 