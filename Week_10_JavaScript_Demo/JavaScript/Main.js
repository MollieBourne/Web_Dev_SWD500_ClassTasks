 var random_number

 
function main(){

        
        console.log("is this running");
        document.querySelector('#button').addEventListener('click', guess);
        random_number  = getRandomArbitrary(1, 10);
       
}

 function getRandomArbitrary(min, max) {
    
    return Math.round(Math.random() * (max - min) + min);
            
    
}

function guess(){
    
    var number_guess = document.querySelector('input[name="guess"]').value; 
    var number = parseInt(number_guess);
    
    if (number > random_number){
        
        document.querySelector('#display').innerHTML = "The Number You Guessed Is: Larger";
    }
    
    else if (number < random_number){
        
        document.querySelector('#display').innerHTML = "The Number You Guessed Is: Lower";
        
    }  else if (number == random_number){
        
        document.querySelector('#display').innerHTML = "The Number You Guessed Is: Correct";
    }
    
    
   
}