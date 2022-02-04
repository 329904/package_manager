const sumar = require("../index");
const assert = require("assert");

describe("probar la suma de dos numeros", ()=>{
    it("Cinco mas cinco son 10", ()=>{
        assert.equal(10, sumar(5, 5));
    });

    

});