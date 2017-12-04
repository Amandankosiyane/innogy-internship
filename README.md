# innogy-internship

About

This ia an application that allow customers to book registered plumbers for a morning, midday or afternoon slot for a given week day. It should give the user an appropriate message when there are no available plumbers for the time slot chosen. If the slot is available it should display the plumber's name and contact details to the user who booked the slot.

Customers will able to :

See the available plumbers in the shop.
Book the plumber for that specific day or slot(but still having a minor problem).
Plumbers will be able to:

Register for the days that they will be available to work on.
Update the days when they will no longer be available.
See the customers that have booked for the specific days and slot.
Let's start

Clone my repository from github to your machine.
Copy and paste the following code to your terminal:
 $ git clone https://github.com/Amandankosiyane/innogy-internship.git.

Before you start anything you first need to make sure that you have the following installed:
NodeJS.
MongoDB.
Package.JSON dependencies.
Installation:

NodeJS

First check if you have NodeJS installed in your machine by typing node -v. if you already have NodeJS, your terminal will show you the version of NodeJS that you have. If you do not have NodeJS installed, then install it in your terminal following these commands.
MongoDB

Click here to get guidance on how to install mongoDB, NB: do part 1 only.
Package.JSON dependencies

Since you already have Package.JSON file, you need to install the dependencies by typing the following command:
npm install

Now that you have installed your dependencies JSON file should look like this:
{
  "name": "innogy-tech-challenge",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.2",
    "express-flash": "0.0.2",
    "express-handlebars": "^3.0.0",
    "express-session": "^1.15.6",
    "mongoose": "^4.13.5"
  }
}


Let's run the Application locally

If you installed everything correctly by now you should be able to run the Application locally.
In your terminal type the following command:
- nodemon
or
- node index.js

If you do not have errors you should see this in your terminal(in my case i used nodemon to run the Application):
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
`open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
express-session deprecated undefined resave option; provide resave option index.js:20:9
express-session deprecated undefined saveUninitialized option; provide saveUninitialized option index.js:20:9
web app started on port: 3018

Run the Application in the browser by typing in the localhost number:
http://localhost:3005

Then you should be able to run the application.
Let's run the Application on Heroku

I assume that you already have the following:
Node.js and npm installed.
An existing Node.js app.
A free Heroku account if not then create one.
Now you have heroku account so let's deploy on Heroku. Follow these steps to deploy using Heroku:
- $ git add .
- $ git commit -m "type in a message"
- $ heroku login
> enter your heroku logins
- $ heroku create
- $ git push heroku master

To run the Application online:
$ heroku open

You can now run the Application.
Tools used to run the online Application

MLAB - Cloud database service that hosts MongoDB databases.
npm - Package manager for JavaScript software.
Future plans

Plumbers should be able to update their days and slot.
Plumbers should be able to see who have booked on the specific days and slots.
Customers should be able to book properly.
By:

Amanda Nkosiyane codeX student.
