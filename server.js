require("dotenv").config()

const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")

const indexRouter = require("./routes/index")

const mongoose = require("mongoose")
const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URL)

db.once("open", () => console.log("we up in this bitch mongoose data base connected"))


app.set("view engine","ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))
// app.use(express.json())





app.use("/", indexRouter)

app.listen(process.env.Port || 3000, () => console.log("server connected"))

