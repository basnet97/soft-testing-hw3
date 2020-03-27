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

    module.exports = calculateBMI;