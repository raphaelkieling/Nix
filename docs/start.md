# Nix

Nix is a library for create APIs fast. You need... a unique file if you want. 

**IT'S FAST**

![speed](https://media.giphy.com/media/5YayOGiDo5vItN379Q/giphy.gif)

## Installing

```
npm install -g nix-api
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

Open this URL in the browser: `http://localhost:3000/`

Or go to: `http://localhost:3000/cookie`