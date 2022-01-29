#!/bin/sh

env | grep "FRONTEND_APP_" | xargs -n 1 | awk -F'=' '{printf "export const %s = \"%s\"\n", $1, $2}' > config.js
nginx -g "daemon off;"
