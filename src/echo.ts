import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.post("/", (req: express.Request, res: express.Response) => {
  console.info(req.body);
  res.send("POST!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
