function retSav(age, salary, percentage, goal)
{
    var save = (parseFloat(percentage) / 100) * parseFloat(salary);
    var actSave = 0.35 * save + save;
    var years = parseFloat(goal) / actSave;
    var totalTime = parseInt(years) + parseInt(age);
    return [parseInt(totalTime), parseInt(years)];
}
module.exports = retSav;