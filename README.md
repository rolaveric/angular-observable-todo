# angular-observable-todo
Demo angular app showing how to use observables with RxJS

# Setup
Install JSPM globally

`npm install -g jspm`

Install dependencies

`jspm install`

(Optional) Install live-server to serve files from, and run live-reload from

```
npm install -g live-server
live-server
```

# Design

The TodoDataModel (`app/dataModel/service.js`) acts as the data store for Todo items.  It treats items and the collection
as immutable objects.

The controller (`app/main/controller.js`) links the view to the data store, and applies an optional filter.