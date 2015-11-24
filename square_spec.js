describe('Square', function() {

  it('should get square of given number', function() {
    expect(square(3)).toEqual(9);
  });

  it('should get square of number passing in string format Eg: \'3\'', function() {
    expect(square('3')).toEqual(9);
  });

  it('should return square for number with decimal point', function() {
    expect(square(3.5)).toEqual(12.25);
  });

  it('should return square for string starting number and having number and character', function() {
    expect(square('3a1')).toEqual(9);
  });

  it('should return null for string having character and number', function() {
    expect(square('a11')).toEqual(null);
  });

  it('should return square for negative number', function() {
    expect(square(-3)).toEqual(9);
  });

});