it('should calculate the monthly rate correctly', function () {
  const inputs = {"amount": 10000, "rate": 15, "years": 3}
  expect(calculateMonthlyPayment(inputs)).not.toBeUndefined();
  expect(calculateMonthlyPayment(inputs)).toBeInstanceOf(String);
  expect(calculateMonthlyPayment(inputs)).toEqual('346.65')
});


it("should return a result with 2 decimal places", function() {
  const inputs = {"amount": 100000, "rate": 10, "years": 12}
  expect(calculateMonthlyPayment(inputs)).toEqual('1195.08')
});

//
