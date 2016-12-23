#! /bin/bash

clear; printf "Running delete-directories script...\n"

has_unused_directories=false
directories=("build/" "bower_components/" "node_modules/")

for directory in "${directories[@]}"
do
  if [ -d "$directory" ]; then
    printf "\nRemoving $directory...\n"
    rm -rf "$directory"
    has_unused_directories=true
  fi
done

if [ "$has_unused_directories" = true ]; then
  printf "\nCleaning done.\n"
else
  printf "\nNothing to clean here.\n\n"
fi