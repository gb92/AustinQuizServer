"use strict"

import express, { Application } from "express"
import { QuestionsController } from "./Controllers"

const app: Application = express()
const port = process.env.PORT || 3128

app.use("/questions", QuestionsController)

app.listen(port, () => {
     /* tslint:disable-next-line:no-console */
    console.log("Server Running on Port: " + port)
})
