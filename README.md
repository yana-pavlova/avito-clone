## How to run the project

### Using docker
#### Run all
```
docker compose up
```
The client will be on `http://localhost:5050/`
The server will be on `http://localhost:3000/`

#### Stop all
```
docker compose down
```

### On localhost

#### First, run server
```
cd api
npm i
npm start
```

#### Then, run client
```
cd client
npm i
npm start
```

The client will be on `http://localhost:5050/`
The server will be on `http://localhost:3000/`

### Run project with mock data
```
./api ->
api.js ->
uncomment 21st line
& comment out 19th line
```
Then restart the project.

## Tech stack
- **Typescript**
> WHY: Ensures type safety, prevents runtime errors, and simplifies refactoring.
- **React**
> WHY: Enables a dynamic and responsive UI, seamless state handling with Redux, and optimized rendering.
- **Redux + RTK Query**
> WHY: Provides efficient state management, caching, and streamlined API requests for fetching, filtering, and updating listings.
- **Tailwind**
> WHY: A lightweight framework for quickly building modern, responsive, and aesthetically pleasing UI.
- **Lodash**
> WHY: Used for deep object comparison to prevent unnecessary re-renders; only the isEqual module is imported.