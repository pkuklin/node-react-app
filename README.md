This project uses React+Redux, Node.js, Express and Webpack. Dockerized.

It is also configured with webpack-dev-server, eslint(Airbnb's rules) and babel.
Testing environment configured with Jest + Enzyme.

It has simple Node.js/Express backend with 1 endpoint and mocked data.
Client side app shows list of smartphones and opens details for each one.

## Development mode
In the development mode there are 2 servers running. 
The front end code will be served by the webpack dev server which helps with hot and live reloading. 
The server side Express code will be served by a node server using nodemon which helps in automatically 
restarting the server whenever server side code changes.

#### Run with Docker:

`docker build -t node-react-app .`

`docker run -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 3000:3000 --rm node-react-app`

It will be available on `http://localhost:3000/`

##### Run with Npm: 

`npm install`

`npm run dev`

##### Run with Yarn: 

`yarn install`

`yarn dev`

#### How to test (do not forget to run `npm install` or `yarn install` before testing):

##### Test with Npm:

`npm run test`

`npm run test:watch`

##### Test with Yarn:

`yarn test`

`yarn test:watch`
