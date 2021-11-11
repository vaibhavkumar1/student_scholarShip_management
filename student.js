const isEmail=require('validator').isEmail;
const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    e_Id:{
        type:Number,
        required:true,
        unique:true
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
    email:{
        type:String,
        required:true,
        validate: [ isEmail, 'invalid email' ]
    },
    gender:{
        type:String,
        required:true,
        validate(value){
            let arr=["male","female","Male","Female"];
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
                throw new Error("Non indian student is not eligible for scholarShip.");
            }
        }
    },
    qualification:{
        type:Object,
        required:true,
        validate(value){
            if(Object.values(value)[0]<50 || Object.values(value)[1]<50){
                throw new Error("You are not eligible.");
            }
        }
        
    },
    wantScholar:{
        type:Boolean,
        required:true
    },
    discription:{
        type:String
    },
    chooseSubject:{
        type:Array,
        require:true

    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const student=new mongoose.model("student",schema);
module.exports=student;