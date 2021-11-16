const mongoose=require('mongoose');
const url='mongodb://localhost:27017/mydbname';

mongoose.connect(url,{
    useNewUrlParser: true
}).then(()=>{
    console.log("connection successfull")
}).catch(()=>{
    console.log("No connection")
})