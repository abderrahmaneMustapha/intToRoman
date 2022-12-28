import dotenv from "dotenv"

dotenv.config()

const cors = {
  origin: true,
  methods: ["GET"],
  credentials: true,
  maxAge: 3600
};

const port =  process.env.PORT || 4200

export default Object.freeze({
  cors,
  port,
})