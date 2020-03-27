function validate(){
    var age = document.getElementById("age").value;
    var salary = document.getElementById("salary").value;
    var percentage = document.getElementById("percentage").value; 
    var goal = document.getElementById("goal").value;
    var isValidAge = false;
    var isValidSalary = false;
    var isValidPerc = false;
    var isValidGoal = false;

    if (!(Number.isInteger(+age)) || (+age < 1) || (+age > 100))
    {
        document.getElementById("age").style.borderColor = "red";
        document.getElementById("ageErr").innerHTML = "Age should be integer and in range of 1 and 100";
    }
    else
    {
        isValidAge = true;
        document.getElementById("age").style.borderColor = "green";
        document.getElementById("ageErr").innerHTML = "";
    }

    if (isNaN(+salary) || (+salary <= 0) || (salary == ""))
    {
        document.getElementById("salary").style.borderColor = "red";
        document.getElementById("salaryErr").innerHTML = "Salary should be numeric and greater than 0";
    }
    else
    {
        document.getElementById("salary").style.borderColor = "green";
        isValidSalary = true;
        document.getElementById("salaryErr").innerHTML = "";
    }

    if (isNaN(+percentage) || (+percentage <= 0) || (percentage == "") || (+percentage > 100))
    {
        document.getElementById("percentage").style.borderColor = "red";
        document.getElementById("percErr").innerHTML = "Percentage should be numeric and in range of (0-100]";
    }
    else
    {
        isValidPerc = true;
        document.getElementById("percentage").style.borderColor = "green";
        document.getElementById("percErr").innerHTML = "";
    }
    
    if (isNaN(+goal) || (+goal <= 0) || (goal == ""))
    {
        document.getElementById("goal").style.borderColor = "red";
        document.getElementById("goalErr").innerHTML = "Saving goal should be numeric and greater than 0";
    }
    else
    {
        isValidGoal = true;
        document.getElementById("goal").style.borderColor = "green";
        document.getElementById("goalErr").innerHTML = ""; 
    }

    if (isValidAge && isValidGoal && isValidPerc && isValidSalary)
    {
       var result = retSav(age, salary, percentage, goal);
       var time = result[0];
       var years = result[1];
       document.getElementById("time").innerHTML = time + ".";
    
       if (time <= 100)
       {
            document.getElementById("met").innerHTML = "You need " + parseInt(years) + " more years. Savings goal will be met at the age of " + totalTime + ".";
       }
    
       else if (time > 100)
       {
            document.getElementById("met").innerHTML = "You need " + parseInt(years) + " more years. Savings goal will not be met.";
       }
    
    }
}

function retSav(age, salary, percentage, goal)
{
    var save = (parseFloat(percentage) / 100) * parseFloat(salary);
    var actSave = 0.35 * save + save;
    var years = parseFloat(goal) / actSave;
    var totalTime = parseInt(years) + parseInt(age);
    return [parseInt(totalTime), parseInt(years)];
}