calculateBMI = require('./calculateBMI');
test('BMI index of height 5 ft 10 inches and 160 pounds equal 23.0', () => {
    expect(calculateBMI(5,10,160)).toBe(23.0)
});
test("BMI index of height 0 ft and 11 in, and 4.28 pounds equal 24.9", () => {
    expect (calculateBMI(0, 11, 4.28)).toBe(24.9)
});
test("BMI index of height 6 ft and 5.1 in, and 253 pounds equal 29.9", () => {
    expect (calculateBMI(6, 5.1, 253)).toBe(29.9)
});
test("BMI index of height 4 ft and 9 in, and 139 pounds equal 30.1", () => {
    expect (calculateBMI(4, 9, 139)).toBe(30.1)
});