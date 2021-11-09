const express=require('express');
const router=new express.Router();

const student=require('../models/student');


router.post("/student",async (req,res)=>{
    try{
        const increament=student.find(req.body.enrolnment_Id-1);
        const addingStudent=new student(req.body);
        
        if(req.body.wantScholar!='yes' && req.body.discription!=""){
            res.status(400).send({
                message: "Discription is not required."
            });
        }
        const insertStudent=await addingStudent.save();
        res.status(201).send(insertStudent);
    }
    catch(error){
        res.status(400).send(error);
    }
});

router.get("/student",async (req,res)=>{
    try{
        const getStudent= await student.find({});
        res.send(getStudent);
    }catch(error){
        res.status(400).send(error);
    }
})

router.get("/student/:id",async (req,res)=>{
    try{
        const getStudent= await student.findById(req.params.id);
        res.send(getStudent);
    }catch(error){
        res.status(400).send(error);
    }
});

router.patch("/student/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const updatestudent=await student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updatestudent);
    }catch(error){
        res.status(500).send(error);
    }
})

router.delete("/student/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const deleteStudent=await student.findByIdAndDelete(_id);
        res.send(deleteStudent);
    }catch(error){
        res.status(500).send(error);
    }
})

module.exports=router;