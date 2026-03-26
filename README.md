[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/vq8_GOgi)

## Setup

This project needs a MongoDB connection to run. Create a `.env` file at the
root with the following values (adapt the URI to your environment):

```env
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager   # or Atlas URI
JWT_SECRET=some_long_random_secret
PORT=5000
```

- **Local MongoDB**: start your own instance (`mongod`) or use Docker (`
  mongodb://host.docker.internal:27017/taskmanager`).
- **Atlas**: make sure your IP is whitelisted and the cluster is running.

> ⚠️ If `MONGO_URI` is missing or unreachable the server will log an error and
> exit (tests set `NODE_ENV=test` and will instead throw the original
> connection error).

Once the database is accessible you can start the app with `npm start` or run
`npm run dev` while coding.
