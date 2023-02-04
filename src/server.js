const mysql = require('mysql'); 
const express = require('express'); 
let app = express(); 
const cors = require('cors'); 
app.use(cors())
app.use(express.json({limit:'1mb'})) 

let mysqlConnection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database:'todo_list'
    }
); 
mysqlConnection.connect((err)=>{
    if(!err){
        console.log("CONNECTION SUCCESS")

    }
    else{
        console.log("CONNECTION FAILED")
        console.log(err)
    }
});



app.listen('8000', ()=>{
    console.log("express is running at 8000")
}); 


app.get('/allTodos', (req,res)=>{
    mysqlConnection.query('SELECT * FROM todos', (err,rows,fileds)=>{
        if (!err){
           return (res.json(rows)); 
        }
        else{
            console.log(err); 
        }
    })
})


app.post('/addNewTodo', (req, res)=>{
    let name = req.body.name;
    let assignee = req.body.assignee;
    let startDate = req.body.startDate; 
    let endDate = req.body.endDate; 
    let done = req.body.done; 
    let Id = 0; 
    
    let insertQuery = "insert into todos (`Id`,`name`,`assignee`,`startDate`,`endDate`,`done`) VALUES (?)"
    let values = [Id, name, assignee, startDate, endDate, done];
    mysqlConnection.query(insertQuery, [values], (err)=>{
        if (err){
            console.log(err); 
        }
        return res.json({
            message: 'success'
        }); 
    })
})


app.put('/todos/:id', (req, res)=>{
    let updateQuery = "UPDATE todos SET done='1' where id = ?"; 
    mysqlConnection.query(updateQuery, [req.params.id], (err)=>{
        if (err){
            console.log(err); 
        }
        return res.json({
            message: 'success'
        }); 
    })

    
})


app.delete('/todos/:id', (req, res)=>{
    let deleteQuery = "DELETE FROM todos where id = ?"; 
    mysqlConnection.query(deleteQuery, [req.params.id], (err)=>{
        if (err){
            console.log(err); 
        }
        return res.json({
            message: 'success'
        }); 
    })

    
})