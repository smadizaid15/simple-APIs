const express=require('express');
const app=express();
const port=5500;
app.use(express.json());
let movies=[];

 
app.listen(
  port,
  ()=>{console.log(`live on http://localhost:${port}`);
});


app.post("/movies",(req,res=>{
  const {title,year}=req.body;
    const movie={
      id:movies.length+1,
      title,
      year
    };
     movies.push(movie);
     res.status(201).json(movie);
});


app.get("/movies",(req,res)=>{
  res.json(movies);
});


app.get("/movies/:id",(req,res)=>{
    const id=Number(req.params.id);
    const movie=movies.find(m=>m.id===id);
     if(!movie) {
       return res.status(404).json({message:"movie not found"});
     }
}):


