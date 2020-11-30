import express from "express";
import {render} from "./render";

const app = express();
app.use(express.static('public'))

app.get('*',function (req,res) {
  render(req,res);
})

app.listen(3000);
