function bmi (weight,height) {
    const bmi1 = weight/height**2
    if(bmi1 <= 18.5){
        return('Underweight')
    } else if (bmi1 <= 25.0){
        return('Normal')
    } else if (bmi1 <= 30){
        return('Overweight')
    } else if (bmi1 > 30){
        return('Obese')
    } else {
        return('Error 404 Not Found')
    }
    return bmi
}
bmi(120, 186)