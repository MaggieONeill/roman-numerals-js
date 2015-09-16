
describe('romanNumeral', function() {
  it("will return 'I' for 1", function() {
    expect(romanNumeral(1)).to.equal('I');
  });

  it("will return 'V' for 5", function() {
    expect(romanNumeral(5)).to.equal('V');
  });

  it("will return 'XII' for 12", function() {
    expect(romanNumeral(12)).to.equal('XII');
  });

  it("will return 'CXII' for 112", function() {
    expect(romanNumeral(112)).to.equal('CXII');
  });

  it("will return 'MMMX' for 3010", function() {
    expect(romanNumeral(3010)).to.equal('MMMX');
  });

  it("will return error message", function(){
    expect(romanNumeral(5000)).to.equal('This number is out of range!  The romans can\'t count that high.');
  });

});
