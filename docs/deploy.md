# Deploy

Nix create api but you want put in a server like a heroku. It's easy.

## Heroku

No define port, heroku export a `process.env.PORT`, relax, nix use this.

### 1 - Install nix
```sh
    npm install --save nix-api
```

### 2 - Create a folder with your content

```sh
|_node_modules/
|_package.json
|_source << here (source name is a example)
|_|_image.png
|_|_anything.md
|_|_omg.js
```

### 3 - Create a start script in `package.json`

```json
"scripts": {
    "start": "./node_modules/.bin/nix-api --dir source"
}
```

### 4 - Deploying

```sh
    heroku create

    git add .

    git commit -m "My deploy"

    git push heroku master
```