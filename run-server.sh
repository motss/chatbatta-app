#! /bin/bash

clear; printf "Running run-server script...\n"

if [ ! -d "bower_components/" ]; then
  printf "\n#1 - bower_components/ not found. Installing Bower's depeendencies,,,\n"
  bower i
else
  printf "\n#1 - bower_components/ found. Proceed to next step...\n"
fi

if [ ! -d "node_modules/" ]; then
  printf "\n#1 - node_modules/ not found. Installing NPM's depeendencies,,,\n"
  npm i
else
  printf "\n#1 - node_modules/ found. Proceed to next step...\n"
fi

printf "\n#4 - Booting up Node server..."
node --inspect --harmony server
