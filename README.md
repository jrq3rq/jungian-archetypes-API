```shell
npm i -g nodemon
nodemon server.js

```

```shell
heroku login
cd my-project/
git init
heroku git:remote -a <name-of-heroku-app-here>
git add .
git commit -am "make it better"

heroku logs --tail

git push heroku master
heroku run npm install

```
