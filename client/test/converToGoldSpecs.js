var assert = require("assert");
//var Converter = require("../src/helper/convert_to_gold.js")
import {convertToGold} from "../src/helper/convert_to_gold.js"

describe("Convert to gold", function(){

  // it("reverse numbers", function(){
  //   var num = 1234;
  //   assert.strictEqual("4321",convertToGold(num));
  // })

  it("add formatting", function(){
    var num = 123456;
    assert.strictEqual("12g34s56c",convertToGold(num));
  })

  it("add formatting, only copper", function(){
    var num = 56;
    assert.strictEqual("56c",convertToGold(num));
  })

  it("add formatting, only copper and silver", function(){
    var num = 1256;
    assert.strictEqual("12s56c",convertToGold(num));
  })

  

})