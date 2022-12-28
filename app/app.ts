import express from "express"
import routes from "../routes"
import config from "./config"
import cors from "cors"

const app = express()
const port = config.port

app.use(express.static('views'))
app.options('*',)
app.use("/", cors(config.cors), routes)

app.listen(port, async () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
