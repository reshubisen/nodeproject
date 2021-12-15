# Training System API

A Node.js app using Express and Mongoose for API development of a Training Management System.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone https://github.com/qaidjohar/Training-System-Backend.git # or clone your own fork
cd Training-System-Backend
# Connect to your DB URL in config.env file
npm install
npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Importing sample data

Import sample data into the database for users, courses and subject

```sh
npm run load #make sure DB URL is properly configured in config.env file
```

## Postman Collection

- Postman collection is commited with filename `nodeTest.postman_collection`