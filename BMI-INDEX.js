
function validate(){
    var heightFT = document.getElementById("heightFT").value;
    var heightIN = document.getElementById("heightIN").value;
    var weight = document.getElementById("weight").value;
    var isValidFT = false;
    var isValidIN = false;
    var isValidWT = false;
    
    if (!(Number.isInteger(+heightFT)) || (+heightFT < 1))
    {
        document.getElementById("heightFT").style.borderColor = "red";
        document.getElementById("heightFTErr").innerHTML = "Height in feet should be an integer and greater than zero";

    }
    else
    {
        isValidFT = true;
        document.getElementById("heightFT").style.borderColor = "green";
        document.getElementById("heightFTErr").innerHTML = "";
    }
    

    if (isNaN(+heightIN) || (+heightIN < 0) || (heightIN == ""))
    {
        document.getElementById("heightIN").style.borderColor = "red";
        document.getElementById("heightINErr").innerHTML = "Height in inches should be numeric and greater than or equal to zero ";
    }
    else
    {
        isValidIN = true;
        document.getElementById("heightIN").style.borderColor = "green";
        document.getElementById("heightINErr").innerHTML = "";
    }

    if ((+weight < 0) || (isNaN(+weight) || (weight == "")))
    {
        document.getElementById("weight").style.borderColor = "red";
        document.getElementById("weightErr").innerHTML = "Weight in pounds should be numeric and greater than zero ";
    }
    else
    {
        isValidWT = true;
        document.getElementById("weight").style.borderColor = "green";
        document.getElementById("weightErr").innerHTML = "";
    }

    if (isValidFT && isValidIN && isValidWT)
    {
        var BMI = calculateBMI(heightFT, heightIN, weight);
        document.getElementById("BMI").innerHTML = BMI;
        if (BMI <= 18.4)
            document.getElementById("type").innerHTML = "You are in UnderWeight category";
        else if(BMI >= 18.5 && BMI < 25.0)
            document.getElementById("type").innerHTML = "You are in Normal weight category";
        else if (BMI >= 25.0 && BMI < 30.0)
            document.getElementById("type").innerHTML = "You are in OverWeight category";
        else if (BMI >= 30.0)
            document.getElementById("type").innerHTML = "You are in Obese category";

    }

    function calculateBMI(heightFT, heightIN, weight)
    {
        var weightKg = parseFloat(weight) * 0.453592;
        var temp = parseInt(heightFT) + parseFloat(heightIN) / 12;
        var meter = temp * 0.3048;
        var sqMeter = meter * meter;
        var BMI = weightKg / sqMeter; 
        BMI = BMI.toFixed(1);
        return parseFloat(BMI); 
    }

}
        