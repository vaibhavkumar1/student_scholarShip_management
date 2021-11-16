const express=require('express');
const router=new express.Router();
const _=require('lodash');

const student=require('../models/student');


router.post("/student",async (req,res)=>{
    try{
        // const getPreviouse_Id=await student.find().sort({_id:-1});
        // const firstId=_.get(_.first(getPreviouse_Id),'e_Id',999);
        // const newId=firstId+1;
        // Object.assign(req.body,{e_Id:newId});
        const addingStudent=new student(req.body);
        
        // if(req.body.wantScholar!='yes' && req.body.discription!=""){
        //     res.status(400).send({
        //         message: "Discription is not required."
        //     });
        // }
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

router.get("/student/:e_Id",async (req,res)=>{
    try{
        const id=req.params.e_Id;
        const getStudent= await student.findOne({"e_Id":id});
        res.send(getStudent);
    }catch(error){
        res.status(400).send(error);
    }
});

router.patch("/student/:e_Id",async (req,res)=>{
    try{
        const id=req.params.e_Id;
        const updatestudent=await student.updateOne({"e_Id":id},req.body,{
            new:true
        });
        res.send(updatestudent);
    }catch(error){
        res.status(500).send(error);
    }
})

router.delete("/student/:e_Id",async (req,res)=>{
    try{
        const id=req.params.e_Id;
        const deleteStudent=await student.deleteOne({"e_Id":id});
        res.send(deleteStudent);
    }catch(error){
        res.status(500).send(error);
    }
})

module.exports=router;