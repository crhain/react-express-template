This project provides a template for building fullstack applications with Express.js and React.js.  The React portion was created using create-react-app.  For more information see the README.md in the client folder. 

## Table of Contents

- [Express](#Express)
  - [Debugging](#Debugging)
- [React](#React)

## Express



### Debugging

This application uses the npm debug package by default.  

To add debugging to a file include `const debug = require('debug')(modulename)` at the top of the file.  "modulename" is the name for the module you are debugging. It can be whatever you want.  For this application, I used the naming convention of "app:modulename". place a debug statment in you files as follows: `debug("my random debug text");`.

Finally, to enable debugging you must also set the environmental variable DEBUG=modulename, where "modulename" is the name that you passed to debug in each file when you required it.  So, for example, if you wanted to turn on debugging for all modules using the default naming convention of "app:modulename", you would type the following into the console: `export DEFAULT=app:*`.  If you are using a windows terminal, then type: `set DEFAULT=app:*`

for more information, see [npm-debug](https://www.npmjs.com/package/debug).

## React

