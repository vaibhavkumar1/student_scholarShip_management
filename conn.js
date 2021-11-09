const mongoose=require('mongoose');
const url='mongodb+srv://vaibhavkumar:7456895254@cluster0.ooef4.mongodb.net/student_scholarshit_management';

mongoose.connect(url,{
    useNewUrlParser: true
}).then(()=>{
    console.log("connection successfull")
}).catch(()=>{
    console.log("No connection")
})