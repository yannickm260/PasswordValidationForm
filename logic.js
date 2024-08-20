let myInput = document.getElementById('psw')
let letter = document.getElementById('letter')
let capital = document.getElementById('capital')
let number = document.getElementById('number')
let length = document.getElementById('length')

myInput.onfocus = function(){
    document.getElementById("message").style.display = "block"
}
myInput.onblur = function(){
    document.getElementById("message").style.display = "none"
}
myInput.onkeyup = function(){
    let lowerCaseLetters = /[a-z]/g
    if(myInput.value.match(lowerCaseLetters)){
        letter.classList.remove('text-red-500')
        letter.classList.add('text-green-400',"before:content-['✓']")
    }else{
        letter.classList.add('text-red-500')
        letter.classList.remove('text-green-400',"before:content-['✓']")
    }

    let upperCaseLetters = /[A-Z]/g
    if(myInput.value.match(upperCaseLetters)){
        capital.classList.remove('text-red-500')
        capital.classList.add('text-green-400',"before:content-['✓']")
    }else{
        capital.classList.add('text-red-500')
        capital.classList.remove('text-green-400',"before:content-['✓']")
    }
    
    let numbers = /[0-9]/g
    if(myInput.value.match(numbers)){
        number.classList.remove('text-red-500')
        number.classList.add('text-green-400',"before:content-['✓']")
    }else{
        number.classList.add('text-red-500')
        number.classList.remove('text-green-400',"before:content-['✓']")
    }

    if(myInput.value.length >=8){
        length.classList.remove('text-red-500')
        length.classList.add('text-green-400',"before:content-['✓']")
    }else{
        length.classList.add('text-red-500')
        length.classList.remove('text-green-400',"before:content-['✓']")
    }
}