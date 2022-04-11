// Create a variable named "btn" and use the document.getElementById() to select an element from the DOM. I will be selecting the id name of "btn". This allows me to edit or modify that HTML element. Semicolon marks the end of the instruction I have for my computer to execute.
let btn = document.getElementById('btn');

// Now I add an (addEventListener) to my "btn" variable so whenever a user clicks on the button, my function will be activated.
// Inside of this function, create a variable named "billAmount" and select the id name of "bill_amount" from the DOM with the document.getElementById() and assigned the value property on it so I can get the value from the text-field when the user puts in a number
// Create another variable named "tipPercentage" and select the id name of "tip_percentage" from the DOM with the document.getElementById() and assigned the value property on it so I can get the value from the text-field when the user puts in a number
// Create another variable named "tipAmount" and select the id name of "tip_amount" from the DOM with the document.getElementById() and assigned the value property then set it to my variable "billAmount" multiply by the variable "tipPercentage" divided by 100 in parenthesis.
// Select the id name of "total_bill" from the DOM with the document.getElementById() and assigned the value property to it then set it to equal the method parseFloat that holds my variable "billAmount" plus the method parseFloat that holds my other variable "tipAmount"
// This parseFloat will convert a non float (with out a decimal) to a float (with a decimal). Basically I'm making sure that the number will be an actual number and not a string so I can use it to do math.

btn.addEventListener('click', function(){
    let billAmount = document.getElementById('bill_amount').value;
    let tipPercentage = document.getElementById('tip_percentage').value;

    let tipAmount = document.getElementById('tip_amount').value = billAmount * (tipPercentage / 100);
    document.getElementById('total_bill').value = parseFloat(billAmount) + parseFloat(tipAmount);
})

