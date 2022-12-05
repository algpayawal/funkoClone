import  express  from "express";
import mysql from "mysql"
import cors from "cors"
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database: "test"
})


// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.json("hello this is the backend")
})


// -----------------------get---------------------------- 
app.get("/products", (req, res)=>{
    const q = "SELECT * FROM products"
    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })  
})

// --------------------------get1------------------------

// http://localhost:8080/products/details/14
app.get("/products/details/:id", (req, res)=>{
    const productId = req.params.id;
    const q = 'SELECT * FROM test.products WHERE id = ?'
    db.query(q,[productId],(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })  
})


// -----------------------post---------------------------- 
app.post("/insertProducts", (req, res)=>{
    const q = "INSERT INTO `test`.`products` (`category`, `product_name`, `product_no`, `product_description`, `price`) VALUES (?);"
    const values = [ 
        req.body.category, 
        req.body.product_name, 
        req.body.product_no, 
        req.body.product_description, 
        req.body.price]
    
    db.query(q,[values],(err, data)=>{
        if(err) return res.json(err)
        return res.json("new product created")
    })
})

 
// -----------------------put---------------------------- 
app.put("/updateProducts/:id", (req, res)=>{
    const bookId = req.params.id;
    const q = "UPDATE `test`.`products` SET `category` = ?, `product_name` = ?, `product_no` = ?, `product_description` = ?, `price` = ? WHERE id = ?"
    const values = [ 
        req.body.category, 
        req.body.product_name, 
        req.body.product_no, 
        req.body_description, 
        req.body.price]
    
    db.query(q,[...values, bookId],(err, data)=>{
        if(err) return res.json(err)
        return res.json("product updated sucessfully")
    })
})

// =========================================
app.put("/deleteProducts/:id", (req, res)=>{
    const bookId = req.params.id;
    const q = "DELETE FROM `test`.`products` WHERE (`id` = ?);"
    db.query(q,[bookId],(err, data)=>{
        if(err) return res.json(err)
        return res.json("product deleted sucessfully")
    })
})



app.listen(8080, () =>{
    console.log('connected to backesdndssss')
})