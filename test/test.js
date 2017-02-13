const chai = require("chai");
chai.should();
const draw2 = require("../draw2");

describe("Test draw Square",() =>{
    it("Should throw error m is not number",() => {
        (()=>{
            draw2.validateInput("test",5);
        }).should.throw("m is not number")
    });
    it("Should throw error n is not number",() => {
        (() => {
            draw2.validateInput(5,"test");
        }).should.throw("n is not number");
    });
    it("Should throw error n should be less than half of m",() => {
        (() => {
            draw2.validateInput(10,6);
        }).should.throw("n should be less than half of m");
    });
    it("Should throw error m should greater than zero",() => {
        (() => {
            draw2.validateInput(0,0);
        }).should.throw("m should greater than zero");
    });
});