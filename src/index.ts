import express from "express";
import cors from "cors";
import {config} from 'dotenv'
config()
import helloWorld from './controllers/helloWorld'

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(helloWorld)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`app listening on PORT: ${PORT}`)
})