////LATIHAN 7.15 MEMBATASI DATA YG AKAN DITAMPILKAN DARI MYSQL
var http = require('http');
var express = require('express');
var app = express()
var bodyParser = require('body-parser');
var mysql = require('mysql')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var conn = mysql.createConnection({
    host : "localhost", //nama host database mysql
    user: "root", //user mysql
    password: "", //password mysql
    database : "myDB"
})

conn.connect((err)=>{
    if(err)
        console.log("Problem with MySQL " + err);
    else{
        console.log("Connected with Database");
    }
})

app.post('/myguests', (req, res)=>{
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.body.email
    var query = "INSERT INTO myguests (firstname, lastname, email) VALUES('" + firstname + "','" + lastname + "','" + email + "')"
    conn.query(query, (err, result)=>{
        if(err)
            res.json(err)
        else
            res.json(result)
    })
})

app.delete('/myguests/:id', (req, res)=>{
    var id = req.params.id
    var query = "DELETE FROM myguests WHERE id = " + id
    conn.query(query, (err, result)=>{
        if(err)
            res.json(err)
        else
            res.json(result)
    })
})
 

app.put('/myguests/:id', (req, res)=>{
    var id = req.params.id
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.body.email
    var query = "UPDATE myguests SET firstname= '" + firstname +"', lastname = '" + lastname + "', email = '" + email + "' WHERE id = " + id
    conn.query(query, (err, result)=>{
        if(err)
            res.json(err)
        else
            res.json(result)
    })
})

app.get('/myguests', (req, res)=>{
    var query = "SELECT * FROM myguests LIMIT 2"
    conn.query(query, (err, rows)=>{
        res.json(rows)
    })
})


http.createServer(app).listen(8000, ()=>{
    console.log('Server is running on port 8000')
});








// ////LATIHAN 7.14 MEMPERBARUI DATA DI MYSQL
// var http = require('http');
// var express = require('express');
// var app = express()
// var bodyParser = require('body-parser');
// var mysql = require('mysql')

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// var conn = mysql.createConnection({
//     host : "localhost", //nama host database mysql
//     user: "root", //user mysql
//     password: "", //password mysql
//     database : "myDB"
// })

// conn.connect((err)=>{
//     if(err)
//         console.log("Problem with MySQL " + err);
//     else{
//         console.log("Connected with Database");
//     }
// })

// app.post('/myguests', (req, res)=>{
//     var firstname = req.body.firstname
//     var lastname = req.body.lastname
//     var email = req.body.email
//     var query = "INSERT INTO myguests (firstname, lastname, email) VALUES('" + firstname + "','" + lastname + "','" + email + "')"
//     conn.query(query, (err, result)=>{
//         if(err)
//             res.json(err)
//         else
//             res.json(result)
//     })
// })

// app.delete('/myguests/:id', (req, res)=>{
//     var id = req.params.id
//     var query = "DELETE FROM myguests WHERE id = " + id
//     conn.query(query, (err, result)=>{
//         if(err)
//             res.json(err)
//         else
//             res.json(result)
//     })
// })
 

// app.put('/myguests/:id', (req, res)=>{
//     var id = req.params.id
//     var firstname = req.body.firstname
//     var lastname = req.body.lastname
//     var email = req.body.email
//     var query = "UPDATE myguests SET firstname= '" + firstname +"', lastname = '" + lastname + "', email = '" + email + "' WHERE id = " + id
//     conn.query(query, (err, result)=>{
//         if(err)
//             res.json(err)
//         else
//             res.json(result)
//     })
// })

// http.createServer(app).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// });




////LATIHAN 7.13 MENGHAPUS DATA DARI MYSQL
// var http = require('http');
// var express = require('express');
// var app = express()
// var bodyParser = require('body-parser');
// var mysql = require('mysql')

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// var conn = mysql.createConnection({
//     host : "localhost", //nama host database mysql
//     user: "root", //user mysql
//     password: "", //password mysql
//     database : "myDB"
// })

// conn.connect((err)=>{
//     if(err)
//         console.log("Problem with MySQL " + err);
//     else{
//         console.log("Connected with Database");
//     }
// })

// app.post('/myguests', (req, res)=>{
//     var firstname = req.body.firstname
//     var lastname = req.body.lastname
//     var email = req.body.email
//     var query = "INSERT INTO myguests (firstname, lastname, email) VALUES('" + firstname + "','" + lastname + "','" + email + "')"
//     conn.query(query, (err, result)=>{
//         if(err)
//             res.json(err)
//         else
//             res.json(result)
//     })
// })

// app.delete('/myguests/:id', (req, res)=>{
//     var id = req.params.id
//     var query = "DELETE FROM myguests WHERE id = " + id
//     conn.query(query, (err, result)=>{
//         if(err)
//             res.json(err)
//         else
//             res.json(result)
//     })
// })


// http.createServer(app).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 






////LATIHAN 7.12 MEMASUKKAN/ MENAMBAH RECORD BARU KE TABEL MYSQL

// var http = require('http');
// var express = require('express');
// var app = express()
// var bodyParser = require('body-parser');
// var mysql = require('mysql')

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// var conn = mysql.createConnection({
//     host : "localhost", //nama host database mysql
//     user: "root", //user mysql
//     password: "", //password mysql
//     database : "myDB"
// })

// conn.connect((err)=>{
//     if(err)
//         console.log("Problem with MySQL " + err);
//     else{
//         console.log("Connected with Database");
//     }
// })

// app.post('/myguests', (req, res)=>{
//     var firstname = req.body.firstname
//     var lastname = req.body.lastname
//     var email = req.body.email
//     var query = "INSERT INTO myguests (firstname, lastname, email) VALUES('" + firstname + "','" + lastname + "','" + email + "')"
//     conn.query(query, (err, result)=>{
//         if(err)
//             res.json(err)
//         else
//             res.json(result)
//     })
// })

// app.delete('/myguests/:id', (req, res)=>{
//     var id = req.params.id
//     var query = "DELETE FROM myguests WHERE id = " + id
//     conn.query(query, (err, result)=>{
//         if(err)
//             res.json(err)
//         else
//             res.json(result)
//     })
// })


// http.createServer(app).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 






// ////LATIHAN 7.11 MEMBUAT TABEL MYSQL
// var mysql = require('mysql')

// var conn = mysql.createConnection({
//     host : "localhost", //nama host database mysql
//     user: "root", //user mysql
//     password: "", //password mysql
//     database : "myDB"
// })

// conn.connect((err)=>{
//     if(err)
//         console.log("Problem with MySQL " + err);
//     else{
//         console.log("Connected with Database");
//         conn.query("CREATE TABLE MyGuests (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, email VARCHAR(50), reg_time TIMESTAMP)", (err, result)=>{
//             if(err)
//                 console.error('Error creating table ' + err)
//             else
//                 console.log('Table MyGuests created successfully')
//         })
//     }
// })

////reg_time TIMESTAMP mencatat waktu kpn kita menyimpan otomatis







// ////LATIHAN 7.10 MYSQL --- BUAT DATABASE
// var mysql = require('mysql')

// var conn = mysql.createConnection({
//     host : "localhost", //nama host database mysql
//     user: "root", //user mysql (default)
//     password: "", //password mysql //klo di MAC, password & user root
// })

// conn.connect((err)=>{
//     if(err)
//         console.log("Problem with MySQL " + err);
//     else{
//         console.log("Connected with Database");
//         conn.query("CREATE DATABASE myDB", (err, result)=>{
//             if(err)
//                 console.error('Error creating database ' + err)
//             else
//                 console.log('Database created successfully')
//         })
//     }
// })








////LATIHAN MYSQL
// const { appendFile } = require('fs');
// const { Http2ServerRequest } = require('http2');
// var http = require('http');
// var express = require('express');
// var app = express()
// var bodyParser = require('body-parser');
// var mysql = require('mysql')

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// var conn = mysql.createConnection({
//     host : "localhost", //nama host database mysql
//     user: "root", //user mysql
//     password: "", //password mysql //klo di MAC, password & user root
//     database : "pengembangan_web"
// })

// conn.connect((err)=>{
//     if(err)
//         console.log("Problem with MySQL " + err);
//     else{
//         console.log("Connected with Database");}}) ////kalo sampe sini blm bisa dijalankan karena blm ada database
        
// //         ////database dibawah password tidak perlu dibuat jika mau buat database dari coding
// //         ////cara buat database dari codingan:
// //         // conn.querry("CREATE DATABASE myDB", (err, result)=>{
// //         //     if(err)
// //         //         console.log('Error creating database ' + err)
// //         //     else
// //         //         console.log('Database created successfully')
// //         // })

// //         ////------------------------------------////

// //         //////cara buat table dari codingan:
// //         // conn.querry("CREATE DATABASE MyGuests (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, email VARCHAR(50), reg_time TIMESTAMP)", (err, result)=>{
// //         //     if(err)
// //         //         console.error('Error creating table ' + err)
// //         //     else
// //         //         console.log('Table MyGuests created successfully')
// //         // })
// // })

// app.post('/myguests', (req, res)=>{
//     var firstname = req.body.firstname
//     var lastname = req.body.lastname
//     var email = req.body.email
//     var query = "INSERT INTO MyGuests (firstname, lastname, email) VALUES('" + firstname +"','" +lastname + "','" + email + "')"
//     conn.query(query, (err, result)=>{
//         if(err)
//             res.json(err)
//         else
//             res.json(result)
//     })
// })

// http.createServer(app).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 











////LATIHAN 7.9 - BODY PARSER
// var http = require('http');
// var express = require('express');
// var app = express()
// var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// var persons = []
// app.post('/person', (req, res)=>{
//     persons.push(req.body)
//     res.json(req.body)
// })
// app.get('/person', (req, res)=>{
//     res.json(persons) 
// })
// http.createServer(app).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 






////LATIHAN 7.8 - JSON
// var data = [];
// app.get('/data', (req, res)=>{
//     res.json(data) 
// })

// app.post('/data', (req, res)=>{
//     data.push(Date.now())
//     res.json(data) 
// })





// ////LATIHAN 7.7 - ROUTE PARAMETERS
// app.get('/users/:userId/books/:bookId', (req, res)=>{
//     res.end('req.params') //res.send
// })





// ////LATIHAN 7.6 - GET
// app.get('/home', (req, res)=>{
//     res.end('Home')
// })

// app.get('/about', (req,res)=>{
//     res.end('About')
// })







// ////LATIHAN 7.5 - METHOD ROUTE
// var http = require('http');
// var express = require('express');
// var app = express()

// app.get('/', (req,res)=>{
//     res.end('Konten dari method GET')
// })

// app.post('/', (req,res)=>{
//     res.end('Konten dari method POST')
// })
    
// http.createServer(app).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 







////LATIHAN 7.4 - EXPRESS DENGAN MENYEMATKANNYA KE DALAM MODULE HTTP
// var http = require('http');
// var express = require('express');
// var app = express()

// app.get('/', (req,res)=>{
//     res.end('Konten dari method GET')
// })
    
// http.createServer(app).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 







// ////LATIHAN 7.3 - EXPRESS
// var express = require('express');
// var app = express()

// app.get('/', (req,res)=>{
//     res.end('Konten dari method GET')
// })
    
// app.listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 








// ////LATIHAN 7.2 - ATTRIBUTE URL PADA REQUEST HTTP
// var http = require('http');

// http.createServer( (req, res) => {
//     if(req.url == '/home')
//         res.write('<p>Konten Home</p>')
//     else if(req.url =='/product')
//         res.write('<p>Konten Product</p>')    
//     else if(req.url =='/order')
//         res.write('<p>Konten Order</p>')  
//     else if(req.url =='/order')              
//         res.write('<p>Pengembangan Aplikasi Aplikasi Web dengan Nodejs</p>');
//     else
//         res.write('<h1>404</h1>')
//     res.end();

// }).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 







////LATIHAN 7.1 - HTTP
// var http = require('http');

// //create a server object:
// http.createServer( (req, res) => {
//     res.write('<p>Pengembangan Aplikasi Aplikasi Web dengan Nodejs</p>');
// //write a response to the client
//     res.end(); //end the response
// }).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); //the server object listens on port 8000