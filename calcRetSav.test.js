retSav = require ('./calcRetSav');
test('Current age:23, annual salary:80000, 20% of salary saved with savings goal:1000000, need 46 more years and your age will be 69', () => {
    result = retSav(23, 80000, 20, 1000000);
    time = result[0];
    years = result[1];
    expect(time).toBe(69);
    expect(years).toBe(46)
});