const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    enrolnment_Id:{
        type:Number,
        default:0
    },
    firstName:{
        type:String,
        required:true,
        validate(value){
            if(value=="" || value==" "){
                throw new Error("Empty name is not allowed.");
            }
        }
    },
    middleName:{
        type:String,
        
    },
    lastName:{
        type:String,
        required:true,
        validate(value){
            if(value=="" || value==" "){
                throw new Error("Empty last name is not allowed.");
            }
        }
    },
    age:{
        type:Number,
        required:true,
        validate(value){
            if(value<=17 || value>=32){
                throw new Error("Invalid age.");
            }
        }
    },
    gender:{
        type:String,
        required:true,
        validate(value){
            let arr=["male","female"];
            if(!arr.includes(value)){
                throw new Error("invalid gender.");
            }
        }
    },
    country:{
        type:String,
        required:true,
        validate(value){
            if(value!='India'){
                throw new Error("Non india student is not eligible for scholarShip.");
            }
        }
    },
    qualification:{
        type:Object,
        required:true
        
    },
    wantScholar:{
        type:Boolean,
        required:true
    },
    discription:{
        type:String
    }
})

const student=new mongoose.model("student",schema);
module.exports=student;