# complex-app

Pure javascript full stack app with complex application with chat, posts, follow functionalities

### notes

- make file `app.js`
- `npm init -y`
- `npm install express`
- make `views` folder and first html file `home-guest.ejs`
- `npm install ejs`
- `npm install nodemon`
- make `router` file
- make `controllers` folder - `userController.js`, `postController.js`, `followController.js`
- implement user validation, with normal js and `validator`
- make `models` folder - User, Post, Follow
- `npm install mongodb` and create new free cluster with `users` collection in web version.
- whitelist all IPs `0.0.0.0/0` in mongodb
- make `db.js`, change npm run watch script to watch this file instead
- use separate file `.env` to store connection string and flexible port number, needs `dotenv` package
- `npm install bcrypt` for hashing user passwords
- `npm install express-session` for sessions and cookies
- `npm connect-mongo` to store sessions into mongodb
- `npm connect-flash` for flash messages
- `npm md5` hashing emails for gravatar site
