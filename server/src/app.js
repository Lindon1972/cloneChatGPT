import express from "express"
import cors from "cors"
const routes = import("./routes/routes")

const dot = import("dotenv")
dot.config

const app = express()

app.use(cors())
app.use.routes
app.use(express.json())

export default app