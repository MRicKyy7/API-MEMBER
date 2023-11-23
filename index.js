import express from "express";
import cors from "cors";
import connection from "./config/mysql-connect.js";
import { config } from "dotenv";
import memberRouter from "./routes/memberroutes.js";
import bodyParser from "body-parser";
import jikoRouter from "./routes/jikoroutes.js";
import tmRouter from "./routes/tmroutes.js";
import teamRouter from "./routes/teamroutes.js";
import viewRouter from "./routes/viewroutes.js";
import jmRouter from "./routes/jmroutes.js";

config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/member", memberRouter);
app.use("/jikoshoukai", jikoRouter);
app.use("/teamember", tmRouter);
app.use("/team", teamRouter);
app.use("/view", viewRouter);
app.use("/jiko", jmRouter);

app.listen(port, () => {
  console.log(`Server Running in http://localhost:${2003}/Member`);
  connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connected");
  });
});
