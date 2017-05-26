const assert = require('chai').assert;
// const sayHello = require('../mochaTest').sayHello;
// const addNumbers = require('../mochaTest').addNumbers;
const app = require('../mochaTest');
//Results
const sayHelloResult = app.sayHello();
const addNumbersResult = app.addNumbers(5,5);
//assert 宣稱
describe('App',function(){
    describe('sayHello()',function(){
        it('sayHello should return hello', function () {
            // let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        })

        it('sayHello should return type string', function () {
            // let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        })
    })
    describe('addNumbers()',function(){
        it('addNumbers should be above 5', function () {
            // let result = app.addNumbers(6, 6);
            assert.isAbove(addNumbersResult, 5);

        })
        it('addNumbers should return type number', function () {
            // let result = app.addNumbers(5, 5);
            assert.typeOf(addNumbersResult, 'number');
        })    
    })

})