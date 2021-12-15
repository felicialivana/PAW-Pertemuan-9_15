////CRUD NODEJS
const express = require ("express");
const app = express();

const db = require("./config/db");
const User = require("./models/user");

app.get("/", (req,res) => res.send("respon nodejs berhasil"));

app.use(express.urlencoded({extended:true}));


//menghubungkan nodejs ke database mysql
db.authenticate().then(() => console.log("berhasil terkoneksi dengan database"));



app.post("/crud", async (req,res) => {
    try {
        const {username, email, password} = req.body;
        
        const newUser = new User({
            username, email, password
        })

        await newUser.save();

        res.json(newUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error")
    }
});

app.listen(5000, ()=> console.log("Port berjalan di 5000"))