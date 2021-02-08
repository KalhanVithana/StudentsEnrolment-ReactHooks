
let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
   extended: true
}));
 app.use(cors());

const databasepool =mysql.createPool({

    host:'localhost',
    user:'root',
    password:'password',
    database:'students_database'
});

app.post('/student/add',async(req,res)=>{

   const {name} =req.body
   const {email} =req.body
   const {nic} =req.body
   const {mobile} =req.body
   const {lastname} =req.body

  
    const Adddata = "INSERT INTO  studentenrolment(name,email,nic,mobile,lastname) values(?,?,?,?,?)";


   await  databasepool.query(Adddata,[name,email,nic,mobile,lastname],function(err,result){


     if(err) console.log(err);
     else{
      console.log(result);
      res.send({result});
    

     }
    })
});

const PORT =  process.env.PORT || 4000;

const sever = app.listen(PORT,()=>{

    console.log('port connected ' + PORT )
})





