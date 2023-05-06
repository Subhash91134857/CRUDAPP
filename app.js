const Express = require("express");
const app = Express();
const path = require("path");

// import {connectDB}  from './DB/connectingDB.js'
const connectDB = require("./DB/connectingDB");

// import { router } from "./routes/web.js";
const web = require("./routes/web");

const port = process.env.PORT || "3000";

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

connectDB(DATABASE_URL);


app.use(Express.urlencoded({extended:false}))

// static files
app.use('/student',Express.static(path.join(process.cwd(), "public")));
app.use("/student/edit", Express.static(path.join(process.cwd(), "public")));
// set template engine

app.set("view engine", "ejs");
 
// // Load Routes
app.use("/student", web);

app.listen(port, () => {
  console.log(`Server lsitening at https://localhost:${port}`);
});
