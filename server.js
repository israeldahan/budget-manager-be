import express from "express";
import cors from "cors";
import routers from "./routers/index.js";
import { syncModels } from "./database/index.js";

const app = express();

//connect to db and sync models
syncModels();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }  
  
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send({msg: "Hello World"});
    }
);

//routes
app.use("/api", routers);

app.listen(3000, () => {
    console.log("Server running on port 3000");
    }
);

