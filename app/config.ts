import dotenv from "dotenv"

dotenv.config()

const cors = {
  origin: true,
  methods: ["GET"],
  credentials: true,
  maxAge: 3600
};

const port =  4200 || process.env.PORT

export default Object.freeze({
  cors,
  port,
})