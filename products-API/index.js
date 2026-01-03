const express=require(express);
const app=express():
const port=4500;
app.use(express.json());
let products=[];


app.listen(
  port,
  ()=>{console.log(`listening on http://localhost:${port}`);
      });


app.post("/products",(req,res)=>{
  const {name,price}=req.body;
    const product={
      id:products.length+1,
      name,
      price
    };
    products.push(product);
    res.status(201).json(product);
});


app.get(/"products",(req,res)=>{
    res.json(products);
});


app.delete("/products/:id",(req,res)=>{
  const id=Number(req.params.id);
  products=products.filter(p=>p.id!==id);
  res.json({message:"Product deleted"});
});

  
  


  
