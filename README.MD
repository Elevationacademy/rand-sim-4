# Goal

In this simulation the aim is to expose you to a real world backend architecture and also `bundling` using `webpack`.
- Learning to read architecture diagram in order to understand complicated structured code
- Handling REST API/HTTP status codes (`401`, `422`)
- Using Mongoose
- Learning about self invoked async functions
- Using ES6 in node environment (`export`, `import`, etc)
- Working with external API 
- Using authentication headers
- Getting to know Axios module

# Running/Environment

- Make sure you **fork** this repository to your own Github, then clone it to your computer
- Install all the dependencies from `package.json` file using `$ npm install `
- Then, start the server by using `$ npm start` and **not** using `$ node server.js`
- There are automatic scripts that will run in the background and will compile all your
files into one big file called `./build/server.js`.
It is NOT a file that you should be able to read.
- You have a file attached called _Architecture.pdf_ that explains the architecture of the application, use it!

# To Do

- Server is not even running (go to `/health` to monitor the server), check why
- Fixing access to `/public` folder
- Fixing all the errors that pops up in the console
- There are some database issues that avoid the server to start
- Fix authentication headers
- Add the ability to order by `likes` when searching photos (see the routes in the 'Available Routes' section)

# Features

- Save each requested photo in the database - when a user requests a photo, save it using mongoose models. It means you should also build the schema and a model in the right files
- Add the ability to get/fetch a random photo through a new route `http://localhost:8989/api/photos/random` (read about random photo at Unsplash API: https://unsplash.com/documentation)

# Available Routes & More

There are two main routes that are accessible and one you should create on your on:

1. `http://localhost:8989/api/photos/search/<TERM>` (Can add query params like: `?page=<PAGE>&orderBy=<ORDER_BY>`). 
This route will search photos under the entered term
 
2. `http://localhost:8989/api/photos/<PHOTO_ID>` - will allow you to get more information about the photo

3. `http://localhost:8989/api/photos/random` - will give you a random photo from unsplash api, **you should create this route yourself**

There is a use within two APIs you can read about:

1. https://unsplash.com/documentation

2. https://www.thecolorapi.com/docs
