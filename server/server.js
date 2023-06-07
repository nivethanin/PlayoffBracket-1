const conf = require('dotenv').config('.env')
const cors = require('cors');
const express = require('express')
const app = express()


app.use(cors({
    origin: '*'
  }));

const { Pool } = require("pg");
  

app.get("/table", (req, res) => {
  res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
  const connectDb = async () => {
    try {
        const pool = new Pool({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: Number(process.env.PGPORT)
        });
 
        await pool.connect()
        console.log("connected")
        await pool.end()
    } catch (error) {
        console.log(error)
    }
}
console.log("connected")
connectDb()

})

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
})

app.listen(5000, () => {console.log("Server started on port 5000")})