let chai=require('chai');
let chai_http=require('chai-http');
let route=require('../src/routers/route');
var supertest = require("supertest");

chai.should();

chai.use(chai_http);

describe("Test API",function(){
    describe("post /api/student",function(){
        it("it should create a students",(done)=>{
            chai.request(route)
                .post('/student')
                .send({
                    "firstname":"vaibhav"
                })
                .expect("Content-type",/json/)
                .expect(200)
                .end(function(err,res){
                    res.status.should.equal(200);
                    res.body.error.should.equal(false);
                    res.body.data.should.equal(30);
                    done();
                })
        })
    })
})
