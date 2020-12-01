const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const auth = require("./middleware/auth.js");
const dataRoutes = require("./routes/approutes");
const userRoutes = require("./routes/user");

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

const http = require("http");
const hostname = "127.0.0.1";
const port = 8000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization",
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    );
    next();
});

app.use(bodyParser.json());
app.use(cors());
app.use("/user", userRoutes);
// app.use('/data', dataRoutes);
app.use(auth);

// app.use('/data/arbustum', (req, res, next) => {
// 	const tree = new Tree ({
// 		name : req.body.name
// 	});
// 	tree.save()
// 	.then(result =>{
// 		console.log(result);
// 	})
// 	.catch(err => console.log(err));
// 	res.status(201).json({
// 		message: 'Handeling POST request to /tree',
// 		createdTree: tree
// 	});
// });

// app.post('./data/arbustrum', dataRoutes);
app.post("/user", userRoutes);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.listen(port, function () {
    console.log("Server has started!!");
});
