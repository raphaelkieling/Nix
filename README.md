# Nix

Nix is a library for create APIs fast. You need... a unique file if you want. 

**IT'S FAST**

![speed](https://media.giphy.com/media/5YayOGiDo5vItN379Q/giphy.gif)

## Installing

```
npm install -g nix
```

## Getting start

If you run the command here:

```txt
|_cookie.json
|_myFolder/
  |_person.json
  |_toRead.md
  |_subFolder/
    |_anything.js
    |_home.html

```

### Run

```
nix
```

### You will receive

```
GET: cookie
GET: myFolder/person
GET: myFolder/toRead
GET: myFolder/subFolder/anything
GET: myFolder/subFolder/home
```

Go to `localhost:PORT/GET_PATH`

## Mega Ultra Super Advanced

|Argument|Description|
|--------|-----------|
|`-p`, `--port`| Set a custom port to api|


## Contributing

* Create a branch with `your-name/your-feature`
* Make a pull request
* Be happy

## Todo

- [ ] Create a env file to configure.
- [ ] Use CLI and a library to node
- [ ] Use that with [heroku](https://www.heroku.com/) or other app.
- [ ] Create a logo
- [ ] Create a doc
- [x] Accept Markdown
- [ ] Accept Markdown with sintax highlight
- [ ] Accept JSX
- [ ] Accept Python
- [x] Accept JS
- [x] Accept HTML
- [x] Accept JSON
- [ ] Accept Pug
- [ ] Accept MustacheJS