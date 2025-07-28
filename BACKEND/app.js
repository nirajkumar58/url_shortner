import express from "express";
import {nanoid} from "nanoid"
import dotenv from "dotenv"
import connectDB from "./SRC/config/monogo.config.js"
import short_url from "./SRC/routes/short_url.route.js"
import user_routes from "./SRC/routes/user.routes.js"
import auth_routes from "./SRC/routes/auth.routes.js"
import { redirectFromShortUrl } from "./SRC/controller/short_url.controller.js";
import { errorHandler } from "./SRC/utils/errorHandler.js";
import cors from "cors"
import { attachUser } from "./SRC/utils/attachUser.js";
import cookieParser from "cookie-parser"

dotenv.config("./.env")

const app = express();

app.use(cors({
    origin: '*', // Allow all origins for testing
    credentials: true 
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(attachUser)

// Add a test route
app.get("/api/test", (req, res) => {
    res.json({ message: "Server is working!" });
});

app.use("/api/user",user_routes)
app.use("/api/auth",auth_routes)
app.use("/api/create",short_url)
app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)

app.listen(3000,()=>{
    connectDB()
    console.log("Server is running on http://localhost:3000");
})

// GET - Redirection 