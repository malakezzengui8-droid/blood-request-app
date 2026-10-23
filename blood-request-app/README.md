# Blood Request – MERN CRUD

Simple CRUD for the `BloodRequest` class (MongoDB, Express, React, Node).

## Folder structure

```
blood-request-app/
├── server/
│   ├── server.js                  # starts Express + connects MongoDB
│   ├── models/BloodRequest.js     # the class diagram as a Mongoose model
│   └── routes/bloodRequests.js    # create / read / update / delete
└── client/
    └── src/
        ├── App.jsx                # holds the state, runs the CRUD actions
        ├── api.js                 # fetch calls to the server
        └── components/
            ├── RequestForm.jsx    # create + edit form
            └── RequestTable.jsx   # list with Edit / Delete buttons
```

## Run it

You need Node.js and MongoDB running locally.

**1. Server**
```
cd server
npm install
cp .env.example .env
npm run dev
```

**2. Client** (new terminal)
```
cd client
npm install
npm run dev
```

Open http://localhost:5173

## API

| Method | URL                         | Action  |
|--------|-----------------------------|---------|
| GET    | /api/blood-requests         | Read    |
| POST   | /api/blood-requests         | Create  |
| PUT    | /api/blood-requests/:id     | Update  |
| DELETE | /api/blood-requests/:id     | Delete  |
