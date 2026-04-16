#!/bin/sh
# Fix permissions on the persistent volume at runtime
chown -R 1001:1001 /app/data
chmod -R 755 /app/data

# Switch to the non-root user and start the app
exec su-exec nextjs node server.js