function  getPin(){
    const random = Math.floor(Math.random() * 10000);
    const pinString = random+'';
    if(pinString.length == 4){
        return random;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(!isNaN(number)){   
        const prevNumber = calcInput.value;
        const newNumber = prevNumber + number;
        calcInput.value = newNumber;
    }
    else if(number == 'C'){
        calcInput.value = '';
    }
});

function verifyPin(){
    const generatedPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;

    const validFeedback = document.getElementById('valid');
    const invalidFeedback = document.getElementById('invalid');
    if(generatedPin === typedPin){
        invalidFeedback.style.display = 'none';
        validFeedback.style.display='block';
    }
    else{
        validFeedback.style.display='none';
        invalidFeedback.style.display = 'block';
    }
    
}