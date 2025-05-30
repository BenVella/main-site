#!/bin/bash

# Remember the current directory
original_dir=$(pwd)

# Locate the directory of this script and move to its parent directory
script_dir=$(dirname "$(realpath "$0")")
cd "$script_dir/../docs" || exit
echo $(pwd)

# Execute the command
. bundle exec jekyll serve --host 127.0.0.1

# Return to the original directory
cd "$original_dir" || exit
