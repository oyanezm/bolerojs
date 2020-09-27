# BoleroJS

A Single Page Js Framework. Powered by RequireJS.

## Install

`npm i oyanezm/bolerojs --save`

## Configure

create a file `app.js` containing `routes` and `controller` references, and
pass it to the framework `load` method.

```js
require(["node_modules/bolerojs/bolero"], function(bolero){

  var routes = [ "app/artist/route" ];
  var controllers = [ "app/artist/controller" ];

  bolero.load(routes, controllers);
});
```

## Include

Create a `index.html` file and import `bolero.js` from within the `header`. It' will use the file `app.js` as it's entrypoint.

```html
<script src="node_modules/bolerojs/bolero.js" type="text/javascript" />
```

## Serve

You can serve by doing

`npx serve`
