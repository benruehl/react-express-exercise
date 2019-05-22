# react-express-exercise

An exercise consisting of a react client and an express server interacting with the GitHub API

## Installation of backend

1. Go to backend directory

```sh
cd express-backend
```

2. Install project dependencies

```sh
npm install
```

3. Compile sources

```sh
npm run build
```

4. Start application

```sh
npm start
```

## Installation of frontend

1. Go to backend directory

```sh
cd react-frontend
```

2. Install project dependencies

```sh
npm install
```

3. Start application

```sh
npm start
```

## Configuration

Frontend and backend both support configuration via environment variables.

**Backend**
- `PORT` - The port of the application (default is `4000`)

**Frontend**
- `PORT` - The port of the application (default is `3000`)
- `REACT_APP_BACKEND_URL` - The base url of the backend application (default is `http://localhost:4000/api/v1`)

How their values are set depends on the terminal used, e.g.:

**Powershell**
```sh
$env:PORT = '5000'; npm start
```

**Bash**
```sh
PORT=8000 npm start
```
