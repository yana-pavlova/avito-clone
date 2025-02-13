## How to run

### Using docker
#### Run all
```
docker compose up --build
```

#### Stop all
```
docker compose down
```

#### Run only server
```
docker compose up server --build
```

Will be on `http://localhost:3000/`

#### Stop only server
```
docker compose stop server
```

#### Run only client
```
docker compose up client --build
```
The app will be on `http://localhost:5050/`

#### Stop only client
```
docker compose stop client
```

### On localhost

#### Run server
```
cd api
npm i
npm run start
```

#### Run client
```
cd client
npm i
npm run start
```

The app will be on `localhost:5050`

## Stack
- Typescript
- React
- Redux
- RTK Query (for easy work with redux storage)
- Tailwind (for quick & modern styling)
- Lodash (for deeply comparing objects; only one module imported)