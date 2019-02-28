# Module

Modules extend the logic of Nix and cread a lot of possibilits.

## Javascript

From the version `1.0.3` the `JavascriptModule` has support to last version of Javascript. We use [Express](https://expressjs.com/) to make routes, requests and response! 

You can use `node_modules` in your folder. Try running `npm install --save moment`:
```txt
|_node_modules
|_a.js
|_sub-folder
|_|_b.js

run -> nix
```

```js
import moment from 'moment';

export default ({ req, res }) =>{
    res.send(moment().format('YYYY-MM-DD'))
}
```

## Html

```html
<html>
    <!-- a simple html file...need write this?  -->
</html>
```

## Markdown

```md
# Title

A file with extension .md

<!-- I need write more? -->
```

## JSX
    Todo
## Vue
    Todo