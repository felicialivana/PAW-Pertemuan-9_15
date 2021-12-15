//LATIHAN 8.4 - FORM DATA
//GALLERY.JS
import React, {Component} from 'react';

export default class Gallery extends Component{
    uploadFile(ev){
        var data = new FormData(); //buat form data
        data.append('FileImage', ev.target.files[0]) //tambahkan file ke dalam form data(fileImage)
        fetch('http://localhost:8000/upload-image',
            {
                method:'POST',
                body: data
            }
        )
        .then(response => response.json())
        .then(res=>{
            console.log(res);
            alert('File berhasil diupload')
        })
        .catch(error=>{
            alert('File gagal diupload')
        })
    }

    render(){
        return (
            <div>
                upload File : <input accept="image/*" type="file" onChange={this.uploadFile.bind(this)}/>
            </div>
        )
    }
}








//LATIHAN 8.4 - FORM DATA
//TBLGALLERIES
app.post('/save-gallery', upload.single('fileImage'), (req, res)=>{
    var gallery ={
        caption : req.body.caption,
        image: req.file.filename
    }

    conn.query("INSERT INTO tbl_galleries SET ?", gallery, (err, result)=>{
        if(err) res.status(400).json(err)
        else res.status(200).json(result)
    })
})









//LATIHAN 8.3 - FORM DATA
//GALLERY.JS
import React, {Component} from 'react';

export default class Gallery extends Component{
    uploadFile(ev){
        var data = new FormData(); //buat form data
        data.append('FileImage', ev.target.files[0]) //tambahkan file ke dalam form data(fileImage)
        fetch('http://localhost:8000/upload-image',
            {
                method:'POST',
                body: data
            }
        )
        .then(response => response.json())
        .then(res=>{
            console.log(res);
            alert('File berhasil diupload')
        })
        .catch(error=>{
            alert('File gagal diupload')
        })
    }

    render(){
        return (
            <div>
                upload File : <input accept="image/*" type="file" onChange={this.uploadFile.bind(this)}/>
            </div>
        )
    }
}






//LATIHAN M12 8.2 MULTER
var http = require('http')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var multer = require('multer')


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    if (req.method === "OPTIONS") {
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        return res.status(200).json({});
    }
    next();
});

var storageFile = multer.diskStorage({//buat config file storage})
    destination : (req, file, cb)=>{//set folder sebagai destinasi upload
        cb(null, Date.now() + file.originalname)
    }
})

var upload = ({multer({storage: storageFile}) //buat object upload
})

app.post('/upload-image', upload.single('fileImage'), (req, res)=>{
    res.json(req.file);
})

http.createServer(app).listen(8000, ()=>{
    console.log('Server is running on port 8000')
})








//LATIHAN M12 8.1 - LOADING LOCAL MODUL
//INDEX.JS
var http = require('http')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var guest_routes = require('./api/routes/guests_routes') //load module guests_routes

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    if (req.method === "OPTIONS") {
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        return res.status(200).json({});
    }
    next();
});

app.use('/myguests', guest_routes) //create router & embed module guests_routes

http.createServer(app).listen(8000, ()=>{
    console.log('Server is running on port 8000')
})







//LATIHAN M12 8.1 - LOADING LOCAL MODUL
//MYGUESTS_ROUTES.JS
var express = require('express')
var router = express.Router(); //create object router
var guestController = require('../controllers/guests_controllers') //load module guests_controllers

router.get('/', guestController.get_guests)
router.get('/:id', guestController.get_guests_single)
router.post('/', guestController.save_guest)
router.put('/:id', guestController.edit_guest)
router.delete('/:id', guestController.delete_guest)

module.exports = router








//LATIHAN M12 8.1 - LOADING LOCAL MODUL
//GUESTS_CONTROLLER.JS
var conn = require('./database') //load module database.js

exports.get_guests = (req, res) =>{//module untuk handler get myguests
    var query = "SELECT * FROM MyGuests LIMIT 10"
    conn.query(query, (err,rows)=>{
        res.json(rows)
    })
}

exports.get_guests_single = (req, res)=>{//module untuk handler get myguests/:id
    var id = req.params.id
    conn.query("select * from MyGuests where id = " + id, (err, row)=>{
        res.json(row[0])
    })
}

exports.save_guest = (req, res)=>{ //module untuk handler post myguests
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.body.email
    console.log(req.body);
    var query = "INSERT INTO MyGuests (firstname, lastname, email) VALUES('"+ firstname +"','" + lastname + "','" + email + "')"
    conn.query(query, (err, result)=>{
        if(err)
            res.json(err)
        else 
            res.json(result)
    })
}


exports.edit_guest = (req, res)=>{ //module untuk handler put myguests
    var id = req.params.id
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.body.email
    var query = "UPDATE MyGuests SET firstname = '" + firstname +"', lastname = '" + lastname + "', email ='" + email + "' WHERE id = " + id
    conn.query(query, (err, result)=>{
        if(err)
            res.json(err)
        else 
            res.json(result)
    })
}


exports.delete_guest = (req, res)=>{ //module untuk handler delete myguests/:id
    var id = req.params.id
    var query = "DELETE FROM MyGuests WHERE id = " + id
    conn.query(query, (err, result)=>{
        if(err)
            res.json(err)
        else 
            res.json(result)
    })
}







//LATIHAN M12 8.1 - LOADING LOCAL MODUL
//DATABASE.JS
var mysql = require ('mysql')
var conn = mysql.createConnection({
    host : "localhost", //nama host database mysql
    user: "root", //user mysql
    password: "", //password mysql
    database: "myDB"
}) 

module.exports = conn;






//LOADING LOCAL MODULE
//APP.JS
var myLogModule = require('./log.js');
myLogModule.info('Node.js started');






//EXPORT LOCAL MODULE
//LOG.JS
var log = {
    info:function (info) {
        console.log('Info:' + info);
    },
    warning:function (error){
        console.warn('Warning: '+warning);
    },
    error:function(error) {
        console.error('Error: ' + error);
    }
};

module.exports =log