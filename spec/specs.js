describe('palindromes', function(){
  it("is false if the word is not spelled the same backwords and forwords", function(){
    expect(palindromes("dog")).to.equal(false);
  });

  it("is true if the word is spelled the same backwords and forwords", function(){
    expect(palindromes("mom")).to.equal(true);
  });

  it("is true if the multi word string is spelled the same backwords and forwords", function(){
    expect(palindromes("a nut for a jar of tuna")).to.equal(true);
  });


});
