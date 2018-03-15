This project provides a template for building fullstack applications with Express.js and React.js based on an app built for Stephen Grider's udemy course "Node with React: Fullstack Web Development".  The React portion was created using create-react-app.  For more information on using react see the README.md in the client folder. 

## Table of Contents

- [Express](#Express)
  - [Debugging](#Debugging)
- [React](#React)
  - [Redux-Form](#Redux-Form)
- [Configure Git](#Configure-Git)
- [Deploying App To Heroku](#Deploying-App-To-Heroku)


## Express



### Debugging

This application uses the npm debug package by default.  

To add debugging to a file include `const debug = require('debug')(modulename)` at the top of the file.  "modulename" is the name for the module you are debugging. It can be whatever you want.  For this application, I used the naming convention of "app:modulename". place a debug statment in you files as follows: `debug("my random debug text");`.

Finally, to enable debugging you must also set the environmental variable DEBUG=modulename, where "modulename" is the name that you passed to debug in each file when you required it.  So, for example, if you wanted to turn on debugging for all modules using the default naming convention of "app:modulename", you would type the following into the console: `export DEFAULT=app:*`.  If you are using a windows terminal, then type: `set DEFAULT=app:*`

for more information, see [npm-debug](https://www.npmjs.com/package/debug).


## React

### Redux-Form

Steps for using redux form in an application

1. You must create a container component that is wrapped using the ReduxForm from the redux-form library:
2. You must also connect the passed form to redux and pass an action handler that will send a post request to the server
3. The form should have an `onSubmit={handleSubmit}` as a property if you want to use form validation
4. You should then pass an action handler to the handleSubmit and call it with dispatch as follows: 
  ```jsx
    onSubmit={ handleSubmit((values, dispatch) => dispatch(submitSample(values, history)) ) }
  ```
5. The history object is used for routing back to another page from your handler and must be enabled by wrapping you componet in "withRouter" from react-router-dom.

For an example on how to set up the rest of the form, see components in `client/src/sample` and "submitSample" handler in `client/src/actions/index.js`.

For an example on how to build the post route handler on the server, see `routes/index.js`.  

Redux-Form documentation is can found [here](https://redux-form.com/7.3.0/) 

## Configure Git

* When pushing to a new remote for the first time, rember to use: `git push --set-upstream [your upstream address on git hub] master`.
* Also remeber to set the "origin"

## Deploying App To Heroku

The application has already been configured to build react on the server when deployed to heroku.  In order to set up the heroku application you must:

1. Have an account with Heroku
2. Have the Heroku cli installed
3. at the cli, type `heroku create [name]` with whatever name you want in the name field.  This will add a new git remote called "heroku"
4. to deploy your app, you must type `git push heroku master`
5. to open the app, type: `heroku open`