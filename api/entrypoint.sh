#!/bin/sh

set -e

echo "Starting the application in node environment: $NODE_ENV"

if [ "$NODE_ENV" = "development" ]; then
    echo "⏳ Setting up development Postgres to be ready..."
    
    until nc -z "$POSTGRES_HOST" "$POSTGRES_PORT"; do
        echo "⏳ Waiting for Postgres on $POSTGRES_HOST:$POSTGRES_PORT..."
        sleep 1
    done

    echo "📦 Running migrations..."
    npx knex --knexfile knexfile.ts migrate:latest

    echo "🌱 Seeding with test data..."
    npx knex --knexfile knexfile.ts seed:run
fi

exec "$@"