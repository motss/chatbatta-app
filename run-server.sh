#! /bin/bash

clear; printf "Running run-server script...\n"

if [ ! -d "node_modules/" ]; then
  printf "\n#1 - node_modules/ not found. Installing NPM's dependencies,,,\n"
  npm i
else
  printf "\n#1 - node_modules/ found. Proceed to next step...\n"
fi

printf "\n#2 - Running Node.js server...\n"
node --inspect index.js

printf "\nDone. Serving static resource assets...\n"