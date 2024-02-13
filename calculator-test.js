
it('should calculate the monthly rate correctly', function () {
  const values = {amount:12000, years: 15, rate: 4.65};
  expect(calculateMonthlyPayment(values)).toEqual('92.72');
});

it("should return a result with 2 decimal places", function() {
  const values = {amount:20000, years: 6, rate: 6.5};
  expect(calculateMonthlyPayment(values)).toEqual('336.20');
});

it("should calculate high loan amounts", function() {
  const values = {amount:1000000, years: 35, rate: 3.4};
  expect(calculateMonthlyPayment(values)).toEqual('4075.18');
});

it("should handle low interest rates", function() {
  const values = {amount:15000, years: 10, rate: 0.3};
  expect(calculateMonthlyPayment(values)).toEqual('126.90');
});

it("should handle high interest rates", function() {
  const values = {amount:15000, years: 10, rate: 50};
  expect(calculateMonthlyPayment(values)).toEqual('629.70');
});

it("should handle decimal inputs", function() {
  const values1 = {amount:10000.34, years: 3, rate: 3.99};
  expect(calculateMonthlyPayment(values1)).toEqual('295.21');
  const values2 = {amount:10000, years: 3, rate: 9.25};
  expect(calculateMonthlyPayment(values2)).toEqual('319.16');
  const values3 = {amount:10000, years: 4.67, rate: 7.254196512347};
  expect(calculateMonthlyPayment(values3)).toEqual('210.91');
});

it("should handle non-number inputs", function() {
  const values1 = {amount:5000, years: '5 years', rate: 4};
  expect(calculateMonthlyPayment(values1)).toEqual('NaN');
  const values2 = {amount:5000, years: 4, rate: "true"};
  expect(calculateMonthlyPayment(values2)).toEqual('NaN');
});

/// etc
