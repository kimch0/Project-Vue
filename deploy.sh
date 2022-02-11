#!/usr/bin/env sh

set -e

npm run build

cd dist

git init 
git add -A 
git commit -m 'New Deployment'
git push -f git@github.com:kimch0/Project-Vue.git master:gh-pages

cd -