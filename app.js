const express=require('express');
require('../src/db/conn');
const router=require('../src/routers/route');

const app=express();
const port=process.env.PORT || 3000;

//for using of json data in express js.
app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log(`connection is live at port number ${port}`);
})