#!/usr/bin/env sh

# check we are in right directory
if [ ! -e deploy.sh ]; then
    echo "must be in root directory"
    exit 1
fi

# abort on errors
set -e

# build
npm run build

# copy index to 404 for histy routing reloads
cat dist/index.html > dist/404.html

# add README.md for github repository
echo "Deployment at $(date)" > dist/README.md

# navigate into the build output directory
cd dist

# push files into github.io website
git init
git checkout -b main
git add -A
git commit -m "Deployment at $(date)"
git push -f git@github.com:samrauer/samrauer.github.io.git main

# cleanup git dependencies
cd ..
rm -rf dist/.git
