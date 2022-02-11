@echo off
npm install&&npm run build&&cd dist&&git init&&git add -A&&git commit -m 'deploy'&&git push -f https://github.com/kimch0/Project-Vue.git master:gh-pages&&cd ..