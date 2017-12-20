let assert = require('assert');
let incrementer = require('..');

let numsys, padChar, length;
/*
-----DEF++ => -----DFA numsys:"ABCDEF"
-----FFF++ => ----AAAA numsys:"ABCDEF"
-FFFFFFF++ => AAAAAAAA numsys:"ABCDEF"
FFFFFFFF++ => AAAAAAAA numsys:"ABCDEF"
FFFFFFFA++ => FFFFFFFB numsys:"ABCDEF"
FFFFFFAF++ => FFFFFFBA numsys:"ABCDEF"
09++ => 10 numsys:"0123456789"
99++ => 00 numsys:"0123456789"
00++ => 01 numsys:"0123456789"
*/
describe('incrementer, numsys=0123456789', function () {
  numsys = "0123456789"; 
  padChar = "0";
  length = 2;

  it(`number of possible values: for numsys:"${numsys}" and length=${length} is 100`, function(){
    assert.equal(incrementer.calculateNumberOfValues(numsys,2), 100);
  });
  
  it(`numsys:"${numsys}" : 9 => 10`, function () {
    assert.equal(incrementer.increment(numsys, incrementer.padNumberToLength("9",length,padChar)), "10");
  });
  it(`numsys:"${numsys}" : 99 => 00`, function () {
    assert.equal(incrementer.increment(numsys, incrementer.padNumberToLength("99",length,padChar)), "00");
  });
  it(`numsys:"${numsys}" : 00 => 01`, function () {
    assert.equal(incrementer.increment(numsys, incrementer.padNumberToLength("00",length,padChar)), "01");
  });
  it(`numsys:"${numsys}" : padAndIncrement("9"), length=10 => 0000000010`, function () {
    assert.equal(incrementer.padAndIncrement(numsys, "9",10,"0"), "0000000010");
  });
  
});

describe('incrementer, numsys=ABCDEF', function () {
  
  let numsysAlpha = "ABCDEF"
  
  it(`number of possible values: for numsys:"${numsysAlpha}" and length=8 is 1,679,616`, function(){
    assert.equal(incrementer.calculateNumberOfValues(numsysAlpha,8), 1679616);
  });


  it(`numsys:"${numsysAlpha}" : DEF => DFA`, function () {
    assert.equal(incrementer.increment(numsysAlpha, incrementer.padNumberToLength("DEF",8," ")), "     DFA");
  });
  it(`numsys:"${numsysAlpha}" : _FFF => AAAA`, function () {
    assert.equal(incrementer.increment(numsysAlpha, incrementer.padNumberToLength("FFF",8," ")), "    AAAA");
  });
  it(`numsys:"${numsysAlpha}" : FFFFFFF => AAAAAAAA`, function () {
    assert.equal(incrementer.increment(numsysAlpha, incrementer.padNumberToLength("FFFFFFF",8," ")), "AAAAAAAA");
  });
  it(`numsys:"${numsysAlpha}" : FFFFFFFF => AAAAAAAA`, function () {
    assert.equal(incrementer.increment(numsysAlpha, incrementer.padNumberToLength("FFFFFFFF",8," ")), "AAAAAAAA");
  });
  

});