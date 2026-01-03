const express=require('express');
const app=express();
const port=3500;
app.use(express.json());
let users=[]


app.listen(
  port,
  ()=>{console.log(`its live on http://localhost:${port}`)
      });


app.post("/users",(req,res)=>{
    const{name,email}=req.body;
    const newUser={
      id:users.length+1,
      name:name,
      email:email
    };
       users.push(newUser);
       res.status(201).json(newUser);
});


app.get("/users",(req,res)=>{
   res.json(users);
});

app.get("/users/:id",(req,res)=>{
  const id=Number(req.params.body); 
  const user=users.find(u=>u.id===id);
   if(!user){
    return res.status(404).json({message:"User not found"})'
   }

  
app.put("/users",(req,res)=>{
  const id=Number(req.params.body);
  const {name,email}=req.body;
  const user=users.find(u=>u.id===id);
    if(!user){
      return res.status(404).json({message:"user not found"});
    };
      user.name=name;
      user.email=email;
      res.json(user);
});


app.delete("/users",(req,res)=>{
  const id=Number(req.params.body);
  const index=users.findIndex(u=>u.id===id);
    if(index==-1){
      return res.status(404).json({message:"User not found"});
      }
  users.splice(index,1);
  res.json(message:"User not found"});
}):
