import type { Application } from "express"
import express from "express"

const app: Application = express()

app
   .get("/", (req, res) => {
      res.send("Hello World")
   })