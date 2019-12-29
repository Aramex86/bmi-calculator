
function getResult(weightPerson,heightPerson){

    //Take the value from input's
    let name = document.getElementById('name').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    //Convert values in nembers
    const weightConv = Number(weight);
    const heightConv = Number(height);

    //Do the calculations
    weightPerson = weight;
    heightPerson = height;

   var BMI =  weightPerson / (heightPerson*heightPerson);

   //Print the result

    const result = `Hello ${name}, your BMI is ${Math.round(BMI)}`;

    let resultBMI = document.querySelector('.result');
     
    resultBMI.innerHTML = result;
    
     
     
}

getResult();













