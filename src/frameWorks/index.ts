import express, { Response, Request } from "express";
import morgan from "morgan";

import { dbBase } from "./db/db";

const app = express();

const port = 3001;

app.use(express.json());

app.use(morgan("dev"));

async function starDb() {
  const DB = dbBase.instance;
  const dbIntanse = await DB.connectDb()
  if (!dbIntanse) {
    return console.log("No se pudo contectar");
  }
  if (dbIntanse) {
   console.log("Se pudo conectar");
  }
}

starDb()

app.disable("x-powered-by");

app.get("/", (req: Request, res: Response) => {
  res.send("Bienvenido a la cosota que voy a realizar");
});
app.listen(port, () => {
  console.log(`Escuchando es este puerto señores http://localhost:${port}`);
});
